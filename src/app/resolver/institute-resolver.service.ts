import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class InstituteResolverService implements Resolve<any> {

  constructor( private dataService: DataService ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const institutoId = route.paramMap.get('instituto');
    return this.dataService.getVendedor(institutoId);
    // return institutoId;
  }
}
