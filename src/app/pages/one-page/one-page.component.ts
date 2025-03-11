import { Component } from '@angular/core';
// Importiere deine Sektionen:
import { HomeComponent } from '../../components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-one-page',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <app-home></app-home>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-contact></app-contact>
  `,
  styleUrls: ['./one-page.component.scss']
})
export class OnePageComponent {}
