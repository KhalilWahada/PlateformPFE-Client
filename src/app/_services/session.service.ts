import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../_models/session';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl = 'http://localhost:8080/dds/session';

  constructor(private http: HttpClient) { }
  createSession(session: Object): Observable<Object>  {
    return this.http.post(`${this.baseUrl}/create`, session);
  }
  getsessions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  getsessionsall(): Observable<any> {
    return this.http.get(`${this.baseUrl}/al`);
  }
}
