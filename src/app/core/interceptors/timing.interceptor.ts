import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET') {
      const started = Date.now();
      return next.handle(request)
        .pipe(
          tap(() => {
            const elapsed = Date.now() - started;
            const msg = `${request.method} "${request.urlWithParams}" is executed in ${elapsed} ms.`;
            console.log(msg);
          })
        );
    }

    return next.handle(request);
  }
}
