import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: string = 'admin';
  password: string = 'admin';

  constructor(
    private toastController: ToastController,
    private route: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Inicio de sesión exitoso.',
      position: 'bottom',  // Cambia 'positionAnchor' por 'position'
      duration: 5000,
      color: 'dark',
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Toast cerrado');
          }
        }
      ]
    });
    toast.present();
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Inicio de sesión',
      message: message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      duration: 1000,
      spinner: 'circles'
    });
    await loading.present();
    return loading;
  }

  async formAccess() {
    if (!this.user || !this.password) {
      this.presentErrorAlert('Por favor completa todos los campos.');
      return;
    }

    const loading = await this.presentLoading();

    // Simular una pequeña espera antes de redirigir
    setTimeout(async () => {
      if (this.user === 'admin' && this.password === 'admin') {
        console.log("SUCCESS: Login has been completed");
        this.presentSuccessToast();
        this.route.navigate(['/home']);
      } else {
        console.log("ERROR: Email or password is incorrect");
        this.presentErrorAlert('Correo electrónico o contraseña incorrectos.');
      }
      await loading.dismiss(); // Asegúrate de cerrar el loading
    }, 1500);
  }
}
