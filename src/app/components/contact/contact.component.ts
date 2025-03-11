import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    FormsModule,   // ✅ ngForm, ngModel
    CommonModule   // ✅ *ngIf
  ]
})
export class ContactComponent {

  // ✅ Formular-Daten
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // ✅ Zustände
  isLoading = false;
  successMessage = false;

  // ✅ Snackbar-Daten
  snackbarMessage: string = '';
  snackbarType: 'success' | 'error' = 'success';
  showSnackbarFlag = false;

  // ✅ Formular absenden
  sendEmail(event: Event): void {
    event.preventDefault();

    this.isLoading = true;

    emailjs.send('service_wms4uyb', 'template_zyga4nn', {
      from_name: this.formData.name,
      reply_to: this.formData.email,
      message: this.formData.message
    }, '10yeg4nCl25YzcTuK')
      .then((result: EmailJSResponseStatus) => {
        console.log('✅ Nachricht gesendet:', result.status, result.text);

        // ✅ Snackbar bei Erfolg
        this.showSnackbar('Deine Nachricht wurde gesendet!', 'success');

        // ✅ Zurücksetzen
        this.successMessage = true;
        this.formData = { name: '', email: '', message: '' };

      }, (error) => {
        console.error('❌ Fehler beim Senden:', error);

        // ❌ Snackbar bei Fehler
        this.showSnackbar('Fehler! Bitte versuche es später nochmal.', 'error');
      })
      .finally(() => {
        this.isLoading = false;

        if (this.successMessage) {
          setTimeout(() => {
            this.successMessage = false;
          }, 5000);
        }
      });
  }

  // ✅ Snackbar anzeigen
  showSnackbar(message: string, type: 'success' | 'error') {
    this.snackbarMessage = message;
    this.snackbarType = type;
    this.showSnackbarFlag = true;

    setTimeout(() => {
      this.showSnackbarFlag = false;
    }, 4000);
  }

  // ✅ Snackbar manuell schließen
  closeSnackbar() {
    this.showSnackbarFlag = false;
  }
}
