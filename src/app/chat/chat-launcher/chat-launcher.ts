import { Component } from '@angular/core';
import { ChatComponent } from '../chat/chat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-launcher',
  standalone: true,
  imports: [ CommonModule, ChatComponent ],
  template: `
    <div class="chat-launcher">
      <button class="fab" (click)="open = !open">💬</button>
      <div class="chat-popup" *ngIf="open">
        <app-chat></app-chat>
      </div>
    </div>
  `,
  styles: [`
    .chat-launcher { position:fixed;bottom:1rem;right:1rem;z-index:1000 }
    .fab {
      width:56px;height:56px;border-radius:50%;border:none;
      background:#0b93f6;color:white;font-size:24px;cursor:pointer;
      box-shadow:0 2px 8px rgba(0,0,0,0.3);
    }
    .chat-popup {
      margin-bottom:.5rem;width:320px;height:400px;
      background:white;border-radius:8px;
      box-shadow:0 4px 16px rgba(0,0,0,0.3);
      display:flex;flex-direction:column;overflow:hidden;
    }
  `]
})
export class ChatLauncherComponent {
  open = false;
}
