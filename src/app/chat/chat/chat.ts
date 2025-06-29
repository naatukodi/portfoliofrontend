import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule }                             from '@angular/common';
import { FormsModule }                              from '@angular/forms';
import { HttpClientModule }                         from '@angular/common/http';
import { ChatService }                              from '../../services/chat.service';

interface Message { text: string; from: 'user' | 'bot' }

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ CommonModule, FormsModule, HttpClientModule ],
  template: `
    <div class="chat-wrapper">
      <div #scrollContainer class="message-list">
        <div *ngFor="let m of messages" [ngClass]="m.from">
          <span class="bubble">{{ m.text }}</span>
        </div>
        <div *ngIf="isLoading" class="bot loading">
          <span class="bubble">Typing…</span>
        </div>
      </div>
      <div class="input-area">
        <input [(ngModel)]="question" (keydown.enter)="send()" placeholder="Ask me…"/>
        <button (click)="send()" [disabled]="isLoading || !question.trim()">
          Send
        </button>
      </div>
    </div>
  `,
  styles: [`
    .chat-wrapper { display:flex;flex-direction:column;height:100% }
    .message-list { flex:1;overflow:auto;padding:1rem;background:#f5f5f5 }
    .user, .bot { display:flex;margin-bottom:.5rem }
    .bubble { max-width:70%;padding:.5rem .75rem;border-radius:16px;word-wrap:break-word }
    .user { justify-content:flex-end } 
    .user .bubble { background:#0b93f6;color:white }
    .bot  { justify-content:flex-start }
    .bot .bubble  { background:#e5e5ea;color:black }
    .loading .bubble { font-style:italic }
    .input-area { display:flex;padding:.5rem;border-top:1px solid #ddd;background:white }
    input { flex:1;padding:.5rem;font-size:1rem;border:1px solid #ccc;border-radius:4px;margin-right:.5rem }
    button { padding:0 1rem;font-size:1rem;border:none;border-radius:4px;background:#0b93f6;color:white;cursor:pointer }
    button:disabled { background:#aaa;cursor:not-allowed }
  `]
})
export class ChatComponent {
  private chatService = inject(ChatService);
  @ViewChild('scrollContainer') scroll!: ElementRef<HTMLElement>;
  messages: Message[] = [];
  question = '';
  isLoading = false;

  send() {
    const q = this.question.trim();
    if (!q) return;
    this.messages.push({ text: q, from: 'user' });
    this.question = '';
    this.isLoading = true;
    this.scrollToBottom();

    this.chatService.ask(q).subscribe({
      next: res => {
        this.messages.push({ text: res.answer, from: 'bot' });
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: () => {
        this.messages.push({ text: 'Error: could not get answer', from: 'bot' });
        this.isLoading = false;
        this.scrollToBottom();
      }
    });
  }

  private scrollToBottom() {
    setTimeout(() => {
      this.scroll.nativeElement.scroll({ top: this.scroll.nativeElement.scrollHeight });
    }, 50);
  }
}
