import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FicheService {
  private baseUrl = 'http://localhost:8080/etud/createfiche';
  private baseUrl1 = 'http://localhost:8080/etud/savefiche';
  private baseUrl2 = 'http://localhost:8080/etud/updatefiche';
  private baseUrl3 = 'http://localhost:8080/etud/updatefichedep';
  private baseUrl4 = 'http://localhost:8080/etud/getfiche';
  private baseUrl5 = 'http://localhost:8080/dds';

  
  constructor(private http: HttpClient) { }

  createfiche(convention: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, convention);
  }
  savefiche(convention: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`, convention);
  }
  updatefiche(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl2}`, value);
  }
  updatefichedep(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl3}`, value);
  }
  getFiche(): Observable<any> {
    return this.http.get(`${this.baseUrl4}`);
  }
  getddsFiche(): Observable<any> {
    return this.http.get(`${this.baseUrl5}/fiches/all`);
  }
  validatefiche(id: number): any {
    return this.http.put(`${this.baseUrl5}/validation/${id}`, { responseType: 'text' });
  }
}
