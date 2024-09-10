import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  // Datos temporales para el acceso de la aplicación

  email:string="admin@gmail.com"
  password:string="admin"

  constructor(
    private toastController: ToastController,
    private route: Router,
    private alertController: AlertController
  ) {}  

  // ToastController y AlertController
  
  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Inicio de sesión exitoso.',
      duration: 2000,
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
  
  // Funcion para controlar el acceso a la aplicación
  
  formAccess() {
    if (!this.email || !this.password) {
      this.presentErrorAlert('Por favor completa todos los campos.');
      return;
    }
  
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      console.log("SUCCESS: Login has been completed");
      this.presentSuccessToast();
      setTimeout(() => {
        this.route.navigate(['/home']);
      });
    } else {
      console.log("ERROR: Email or password is incorrect");
      this.presentErrorAlert('Correo electrónico o contraseña incorrectos.');
    }
  }
}
