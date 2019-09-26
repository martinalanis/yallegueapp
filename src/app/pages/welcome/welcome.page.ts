import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { InstitutoInterface } from '../../models/instituto.interface';
import { InstitutoService } from '../../services/instituto.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  institutos: InstitutoInterface[];
  instituto: string;

  usuario = {
    email: '',
    password: ''
  }

  passwordIsShown = false;

  constructor(private router: Router, private menuCtrl: MenuController, private institutoService: InstitutoService) { }

  ngOnInit() {
    this.institutoService.getInstitutos().subscribe( res => this.institutos = res );
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
