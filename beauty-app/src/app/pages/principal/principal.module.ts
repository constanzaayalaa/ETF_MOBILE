import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
    children: [
      {
        path: 'configuracion',
        loadChildren: () => import('../opciones/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('../opciones/mapa/mapa.module').then( m => m.MapaPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../opciones/principal/principal.module').then( m => m.PrincipalPageModule)
      },
      {
        path: 'logout',
        redirectTo: '/home',
        pathMatch: 'full',
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule {}


