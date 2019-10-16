import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  public vendedores: any;

  constructor( private router: Router, private route: ActivatedRoute, private menuCtrl: MenuController ) {}

  ngOnInit(){
    if(this.route.snapshot.data['vendedores']) {
      this.vendedores = this.route.snapshot.data['vendedores'];
    }
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true);
  }

  detallesVendedor() {
    console.log('Click on card');
  }

  chip(event) {
    event.stopPropagation();
    console.log('Click on chip');
  }

}
