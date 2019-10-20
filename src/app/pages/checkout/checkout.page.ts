import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  user = {
    nombre: 'Juan Pérez',
    telefono: '4432555555'
  };

  envio = {
    checked: false,
    salon: '',
    comentarios: ''
  }

  constructor() { }

  ngOnInit() {
  }

  checkout() {
    console.log('Completar pedido');
    console.log('user:', this.user);
    console.log('envio:', this.envio);
  }

  vaciarCarrito() {
    console.log('vaciar carrito');
  }

  subQty(){
    console.log('Restar');
  }

  addQty() {
    console.log('Agregar');
  }

  updateQty() {
    console.log('Actualizar');
  }

}
