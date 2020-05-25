import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
       
        if (true) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic MTczSk1UMDk5MzoxNDMwMTE5OA==`
                }
            });
        }

        return next.handle(request);
    }
}