import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { SessionService } from './_services/session.service';
import { SoutenanceService } from './_services/soutenance.service';
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve <Observable<any>>{

  constructor(private ds: SoutenanceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.ds.getlistsoutenance().pipe(
      map(soutenances => soutenances)
    )
  }
}