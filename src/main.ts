// src/main.ts
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { appRoutes, routes } from './app/app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChatLauncherComponent }     from './app/chat/chat-launcher/chat-launcher';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      HttpClientModule
    ),
    // Your router configuration
    provideRouter(routes),
    { provide: 'standaloneComponents', useValue: [ ChatLauncherComponent ] }
  ]
})
.catch(err => console.error(err));