import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  public instituto: any;

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  goHome() {
    console.log(this.instituto);
    this.router.navigateByUrl('/home/' + this.instituto);
  }
}
