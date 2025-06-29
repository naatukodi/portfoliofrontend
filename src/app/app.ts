// src/app/app.component.ts
import 'zone.js';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatLauncherComponent }  from './chat/chat-launcher/chat-launcher';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatLauncherComponent],
  template: '<router-outlet></router-outlet><app-chat-launcher></app-chat-launcher>'
})
export class App {}