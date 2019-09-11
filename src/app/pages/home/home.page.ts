import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public vendedores: any;

  constructor( private router: Router, private route: ActivatedRoute ) {}

  ngOnInit(){
    if(this.route.snapshot.data['vendedores']) {
      this.vendedores = this.route.snapshot.data['vendedores'];
    }
  }

}
