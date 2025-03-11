import { Routes } from '@angular/router';

// Importiere die Komponenten, die du in den Routen verwenden willst
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Startseite
  { path: 'about', component: AboutComponent }, // Über mich
  { path: 'projects', component: ProjectsComponent }, // Projekte
  { path: 'contact', component: ContactComponent }, // Kontakt
  { path: 'privacy-policy', component: PrivacyPolicyComponent }, // Datenschutz

  // Wildcard-Route (optional): Fängt alles ab, was es nicht gibt
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
