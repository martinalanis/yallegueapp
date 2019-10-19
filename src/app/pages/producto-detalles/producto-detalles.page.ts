import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor( private modalCtrl: ModalController ) { }

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
    }
  }

  checkQty() {
    console.log('check', this.productQty);
    if (this.productQty < 1) {
      this.productQty = 1;
      console.log('EL mininmo del producto debe ser 1');
    }
  }

}
