import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  /* Logica de la aplicacion */

  email:string="admin@gmail.com"
  password:string="admin"

  constructor(public message:ToastController, private route:Router, public alert:AlertController) {}
  
  async successMessage() {
    const toast = await this.message.create({
      message: 'Inicio de sesion exitoso.',
      duration: 2000
    });
    toast.present();
  }

  async errorMessage() {
    const alert = await this.alert.create({
      header: 'Inicio de sesion',
      message: 'Correo o contraseña erroneos, intenta otra vez',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  formAccess() {
    if(this.email ==="admin@gmail.com" && this.password ==="admin"){
      console.log("Success: Inicio de sesion exitoso")
      this.successMessage()
      this.route.navigate(["/home"])
    } else {
      console.log("Error: Correo o contraseña incorrectos")
      this.errorMessage()
    }

  }

}
