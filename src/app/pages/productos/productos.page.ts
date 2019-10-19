import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductoDetallesPage } from '../producto-detalles/producto-detalles.page';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  detallesProducto() {
    console.log('Producto');
  }

  async viewProductDetails() {
    const modal = await this.modalCtrl.create({
      component: ProductoDetallesPage,
      componentProps: {
        titulo: 'Panini Vegetariano',
        precio: '48.50'
      }
    });

    await modal.present();
  }

}
