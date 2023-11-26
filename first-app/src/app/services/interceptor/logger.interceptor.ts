import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Logger Interceptor works!', request);

    // request.clone({headers : new HttpHeaders().set("Auth", "Bearer token")})

    return next
      .handle(request)
      .pipe(tap((value) => console.log('[TAP]', value)));
  }
}
