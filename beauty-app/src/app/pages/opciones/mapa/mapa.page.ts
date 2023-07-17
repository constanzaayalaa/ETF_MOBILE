import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  ubicaciones = [
    {
      nombre: 'Local Pedro de Valdivia',
      direccion: 'Avenida Pedro de Valdivia 963',
      telefono: '+569 5244 8522',
      imagen: 'https://muchosnegociosrentables.com/wp-content/uploads/2021/01/como-abrir-un-salon-de-belleza-guia.jpg',
    },
    {
      nombre: 'Local Los Leones',
      direccion: 'Av. Nueva Providencia 1995',
      telefono: '+569 3578 1254',
      imagen: 'https://hispanos.nancyshousekeepingservice.com/wp-content/uploads/2019/11/Salon-de-belleza-cerca-de-mi-1024x768.jpg',
    },
    {
      nombre: 'Local Los Domínicos',
      direccion: 'Laredo 8405, Las Condes',
      telefono: '+569 8652 3218',
      imagen: 'https://www.enpareja.com/__export/1552789991311/sites/debate/img/2019/03/16/salones_de_belleza_y_portitucixn.jpg_671063525.jpg',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
