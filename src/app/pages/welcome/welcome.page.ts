import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  usuario = {
    email: '',
    password: ''
  };

  passwordIsShown = false;

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  formOnSubmit() {
    console.log(this.usuario);
  }

  showPassword() {
    this.passwordIsShown = !this.passwordIsShown;
    // console.log('show password', this.passwordIsShown);
  }
}
