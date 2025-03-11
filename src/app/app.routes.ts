import { Routes } from '@angular/router';
import { OnePageComponent } from './pages/one-page/one-page.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  // One-Page für Startseite (enthält Home, About, Projects, Contact)
  { path: '', component: OnePageComponent },

  // Extra Route für Datenschutz
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  // Wildcard → alles Undefinierte → Startseite
  { path: '**', redirectTo: '' }
];
