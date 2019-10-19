import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ProductosPage } from './productos.page';
import { ProductoDetallesPage } from '../producto-detalles/producto-detalles.page';
import { ProductoDetallesPageModule } from '../producto-detalles/producto-detalles.module';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage
  }
];

@NgModule({
  entryComponents: [
    ProductoDetallesPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProductoDetallesPageModule
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
