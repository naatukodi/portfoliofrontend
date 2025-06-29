import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChatRequest { question: string }
interface ChatResponse { answer: string }

@Injectable({ providedIn: 'root' })
export class ChatService {
  private url = 'https://tiruportfolio.azurewebsites.net/api/chat';
  constructor(private http: HttpClient) {}
  ask(q: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.url, { question: q });
  }
}
