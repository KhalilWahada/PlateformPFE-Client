import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {
  private baseUrl = 'http://localhost:8080/dds/soutenance';

  constructor(private http: HttpClient) { }
 
  getlistsoutenance(): any {
    return this.http.get(`${this.baseUrl}/find/all`);
  }
  getsoutenance(id: number): any {
    return this.http.get(`${this.baseUrl}/find/${id}`);
  }
  getfichesoutenance(id: number): any {
    return this.http.get(`${this.baseUrl}/find/fiche/${id}`);
  }
  createSoutenance(soutenance: Object): Observable<Object>  {
    return this.http.post(`${this.baseUrl}/affecter`, soutenance);
  }
  modifdate(id: number,soutenance: Object): any {
    return this.http.put(`${this.baseUrl}/${id}`, soutenance );
  }
  anuulersoutenance(id: number): any {
    return this.http.delete(`${this.baseUrl}/annuler/${id}`);
  }
 
}
