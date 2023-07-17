import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  correo!: string;
  contrasena!: string;
  nombre!: string;
  apellido!: string;

  constructor(private router: Router, private toastController: ToastController, private datosService: DatosService) { }

  ngOnInit() {
  }

  async registrar() {
    const user = await this.datosService.get(this.correo);

    if (user) {
      this.presentToast('Correo ya registrado, favor de ingresar otro', 'danger');
      return;
    }

    const nuevoUsuario = {
      email: this.correo,
      password: this.contrasena,
      firstname: this.nombre,
      lastname: this.apellido,
    };

    await this.datosService.set(this.correo, nuevoUsuario);

    this.presentToast('Usuario creado', 'success');
    await this.router.navigate(['/home']);
  }

  async volver() {
    await this.router.navigate(['/home']);
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
