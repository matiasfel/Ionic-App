import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  user:string=""
  password: string=""
  rePassword: string=""

  constructor(
    private toastController: ToastController,
    private route: Router,
    private alertController: AlertController
  ) { }

  //ToastController y AlertController

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Has creado tu cuenta con exito.',
      duration: 2000,
    });
    toast.present();
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'StepMeter',
      message: message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  formAccess() {
    if (!this.user || !this.password || !this.rePassword) {
      this.presentErrorAlert('Debes completar todos los campos para registrarte');
      return;
    }
  
    if (this.rePassword === this.password) {
      console.log("SUCCESS: Login has been completed");
      this.presentSuccessToast();
      setTimeout(() => {
      this.route.navigate(['/home']);
      });
    } else {
      console.log("ERROR: Password is not the same to 'Confirm password'");
      this.presentErrorAlert('Asegurate que al confirmar la contraseña sea la misma');
    }
  }

}
