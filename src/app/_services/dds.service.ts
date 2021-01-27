import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DdsService {
  private baseUrl = 'http://localhost:8080/dds';

  constructor(private http: HttpClient) { }
  /////FICHES//////
  ///get///
  getfichenontraiter(): any {
    return this.http.get(`${this.baseUrl}/fiches/nontraiter`);
  }
  getfichetraiter(): any{
    return this.http.get(`${this.baseUrl}/fiches/traiter`);
  }
  getficheall(): Observable<any>{
    return this.http.get(`${this.baseUrl}/fiches/all`);
  }
  ///put///
  refuserfiche(id: number): any {
    return this.http.put(`${this.baseUrl}/fiche/refus/${id}`, { responseType: 'text' });
  }
  validatefiche(id: number): any {
    return this.http.put(`${this.baseUrl}/fiche/validation/${id}`, { responseType: 'text' });
  }
  affectationprof(id: number,idprof:number): any {
    return this.http.put(`${this.baseUrl}/fiche/validation/${id}/affectation/${idprof}`, { responseType: 'text' });
  }
  annulerfiche(id: number): any {
    return this.http.put(`${this.baseUrl}/fiche/annulation/${id}`, { responseType: 'text' });
  }
  accepterdemandemodificationfiche(id: number): any {
    return this.http.put(`${this.baseUrl}/fiche/demande/${id}`, { responseType: 'text' });
  }
  ///...
  /////////SESSION////////
  ///post
  createSession(session: Object): any  {
    return this.http.post(`${this.baseUrl}/create`, session);
  }
  ///get
  getsessions(): any {
    return this.http.get(`${this.baseUrl}/session/all`);
  }
  getsessionsall(id: number): any {
    return this.http.get(`${this.baseUrl}/session/find/${id}`);
  }
  ///put
  updatesession(id: number , session :Object): any {
    return this.http.put(`${this.baseUrl}/session/${id}`, session);
  }
  ///delete
  deletesession(id: number): any {
    return this.http.delete(`${this.baseUrl}/session/delete/${id}`, { responseType: 'text' });
  }
  
  ///...
  ////////SOUTENANCE//////
  //get
  getlistsoutenance(): any {
    return this.http.get(`${this.baseUrl}/soutenance/find/all`);
  }
  getsoutenance(id: number): any {
    return this.http.get(`${this.baseUrl}/soutenance/find/${id}`);
  }
  getfichesoutenance(id: number): any {
    return this.http.get(`${this.baseUrl}/soutenance/find/fiche/${id}`);
  }
  ///post
  createSoutenance(soutenance: Object): Observable<Object>  {
    return this.http.post(`${this.baseUrl}/soutenance/affecter`, soutenance);
  }
  ///put
  modifdate(id: number,soutenance: Object): any {
    return this.http.put(`${this.baseUrl}/soutenance/${id}`, soutenance );
  }
  ///delete
  anuulersoutenance(id: number): any {
    return this.http.delete(`${this.baseUrl}/soutenance/annuler/${id}`);
  }
  ///...
  ////////ENSEIGNANT///////
  ///get
  getlistprof(): any {
    return this.http.get(`${this.baseUrl}/enseignant/all`);
  }
  ///...
  //////////Convention///////
   ///get
   getlistconv(): any {
    return this.http.get(`${this.baseUrl}/conventions/all`);
   }
  ///get
  getpossibledate(id: number): any{
    return this.http.get(`${this.baseUrl}/soutenance/date/fiche/${id}`);
  }
}
