import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage {

  /* Ajustes para el usuario (prox en base de datos) */

  email: string = '';

  constructor(
    private route: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Recuperar contraseña',
      message: message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Buscando...',
      spinner: 'circles'
    });
    await loading.present();
    return loading;
  }

  async formAccess() {
    // Validar si el email está vacío
    if (!this.email || this.email.trim() === '') {
      this.presentErrorAlert('Por favor, rellena el campo vacío.');
      return;  // Detiene la ejecución si el campo está vacío
    }

    // Mostrar el loading
    const loading = await this.presentLoading();

    setTimeout(async () => {
      // Simular verificación de email
      if (this.email === 'admin@gmail.com') {
        console.log("SUCCESS:");
        await this.presentErrorAlert('Hemos enviado un link a su correo electrónico, reviselo.');
        this.route.navigate(['/login']);
      } else {
        console.log("ERROR:");
        await this.presentErrorAlert('Su correo electrónico no ha sido encontrado en nuestros registros.');
      }
      
      // Cerrar el loading
      await loading.dismiss();
    }, 1500);
  }
}
