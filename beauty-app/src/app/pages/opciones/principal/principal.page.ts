import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  productos = [
    {
      nombre: 'Shampoo Olaplex',
      valor: '$29.990',
      cantidad: '5',
      descripcion: 'Es un producto altamente hidratante, sin sulfatos, un champú reparador que deja el cabello fácil de manejar, brillante y mas saludable con cada uso.',
      imagen: 'https://imagenes.elpais.com/resizer/m9EviBPzmuy5mjL4wl9VnpEhGLI=/1200x0/filters:focal(382x327:392x337)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/CEHTB635WVCMZC3MIYLIYOXH5M.png',
    },
    {
      nombre: 'Esmalte en gel 1 solo paso Hit a homer run',
      valor: '$10.400',
      cantidad: '20',
      descripcion: 'Para recibir el pedido el mismo día, debes realizar la compra antes de las 12:00 hrs y seleccionar al final de la compra el método de despacho Same Day. Si haces el pedido después de las 12:00 hrs o no seleccionas Same Day, tu pedido será entregado al día siguiente hábil. Habilitado para Región Metropolitana.',
      imagen: 'https://sallybeauty.vtexassets.com/arquivos/ids/158899-1200-auto?v=636939690212970000&width=1200&height=auto&aspect=true',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
