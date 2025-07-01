// src/app/app.component.ts
import 'zone.js';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatLauncherComponent }  from './chat/chat-launcher/chat-launcher';
import { NavigationComponent } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, ChatLauncherComponent],
  template: '<app-navigation></app-navigation><div class="container mt-4"><router-outlet></router-outlet></div><app-chat-launcher></app-chat-launcher>'
})
export class App {}