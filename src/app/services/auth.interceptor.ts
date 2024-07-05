import {  HttpEvent, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from "rxjs";

export const AuthInterceptor = (
  req: HttpRequest < unknown > ,
  next: HttpHandlerFn
    ): Observable < HttpEvent < any >> => {
        const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE4OTYyNjM4LCJleHAiOjE3MjE1NTQ2Mzh9.pdByqcdoBx3qgebPjrrWgN3Aj0OZBmcv9Si9H4PyHds';
    if (jwtToken) {
        const newReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${jwtToken}`
        }
        });
        return next(newReq);
    }
    return next(req);
} 