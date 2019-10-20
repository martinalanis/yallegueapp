import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.page.html',
  styleUrls: ['./producto-detalles.page.scss'],
})
export class ProductoDetallesPage implements OnInit {

  // Las variables de input se deben de llamar igual que las enviadas en los parametros
  @Input() titulo;
  @Input() precio;

  productQty = 1;

  constructor( private modalCtrl: ModalController, private toastCtrl: ToastController ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  addProduct() {
    console.log('Add product');
  }

  addQty() {
    this.productQty += 1;
  }

  subQty() {
    if (this.productQty > 1) {
      this.productQty -= 1;
    } else {
      this.showToastMinProducts();
    }
  }

  checkQty() {
    if (this.productQty < 1) {
      this.showToastMinProducts();
      this.productQty = 1;
      console.log('EL mininmo del producto debe ser 1');
    }
  }

  async showToastMinProducts() {
    const toast = await this.toastCtrl.create({
      message: 'El mininmo de productos es 1',
      duration: 3500,
      showCloseButton: true,
      closeButtonText: 'cerrar'
    });
    toast.present();
  }

}
