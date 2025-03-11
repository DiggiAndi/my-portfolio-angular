import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Hier holst du deine routes rein!

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // Hier werden die Routes bereitgestellt
  ]
};
