import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private vendedores: any = ['ITM', 'UTM', 'UMSNH'];

  constructor() { }

  getVendedor(institutoId: any){
    return this.vendedores[institutoId];
  }
}
