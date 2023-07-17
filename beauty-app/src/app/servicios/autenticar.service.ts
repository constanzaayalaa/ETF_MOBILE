import { Injectable } from '@angular/core';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private datosService: DatosService) { }

  async iniciarSesion(email: string, password: string){
    const usuario = await this.datosService.get(email);

    if(!usuario){
      return false;
    }

    if(usuario.password !== password){
      return false;
    }

    this.datosService.set('inicioSesion', true);
    return true;
  }

  async logout(){
    await this.datosService.set('inicioSesion', false);
  }

  async inicioSesion(){
    const inicioSesion = await this.datosService.get('inicioSesion');
    return inicioSesion;
  }
}
