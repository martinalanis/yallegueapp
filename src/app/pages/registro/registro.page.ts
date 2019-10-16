import { Component, OnInit } from '@angular/core';
import { InstitutoInterface } from '../../models/instituto.interface';
import { InstitutoService } from '../../services/instituto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  institutos: InstitutoInterface[];

  newUser = {
    nombre: '',
    email: '',
    password: '',
    institutoId: ''
  }

  passwordIsShown = false;

  constructor(private institutoService: InstitutoService) { }

  ngOnInit() {
    this.institutoService.getInstitutos().subscribe(res => this.institutos = res);
  }

  formOnSubmit(){
    console.log(this.newUser);
  }

  showPassword() {
    this.passwordIsShown = !this.passwordIsShown;
  }

}
