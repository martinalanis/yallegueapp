import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { InstitutoService } from '../services/instituto.service';

@Injectable({
  providedIn: 'root'
})
export class InstitutoResolverService implements Resolve<any> {

  constructor( private institutoService: InstitutoService ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const institutoId = route.paramMap.get('instituto');
    return this.institutoService.getInstituto(institutoId);
    // return institutoId;
  }
}
