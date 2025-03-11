import { Component } from '@angular/core';

// WICHTIG: RouterOutlet importieren, um die Navigation (Routing) zu ermöglichen!
import { RouterOutlet } from '@angular/router';

// Importiere deine eigenen Komponenten für Header, Footer usw.
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Hier importierst du alle Komponenten, die du in der app.component.html verwendest
  imports: [
    RouterOutlet,             // WICHTIG: Muss rein für <router-outlet>!
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',  // Dein Template
  styleUrl: './app.component.scss'      // Deine Styles
})
export class AppComponent {
  title = 'my-portfolio-angular';
}
