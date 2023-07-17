import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticarService } from '../servicios/autenticar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  correo! :string;
  contrasena! : string;

  constructor(private router: Router, private toastController: ToastController, private autenticarService: AutenticarService) {}

  async sesion() {
    if (await this.autenticarService.iniciarSesion(this.correo, this.contrasena)) {
      this.presentToast('Bienvenido', 'success');
      this.router.navigate(['/principal']);
      return;
    }

    this.presentToast('Usuario o contraseña no válidos');
  }

  registrar() {
    this.router.navigate(['/registro']);
  }

  async presentToast(msg: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: color,
      position: 'bottom',
    });
    toast.present();
  }
}
