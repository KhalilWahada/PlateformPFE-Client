import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConventionService {
  private baseUrl = 'http://localhost:8080/etud/createcon';
  private baseUrl1 = 'http://localhost:8080/etud/getcon';

  constructor(private http: HttpClient) { }
  createConvention(convention: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, convention);
  }
  getexist(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }
  
}
