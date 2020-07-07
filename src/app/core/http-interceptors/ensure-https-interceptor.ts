import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Convert http requests to https by appending the request url
 *  Taken from Angular documentation:
 *  https://angular.io/guide/http#intercepting-requests-and-responses
*/
@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    // clone request and replace 'http://' with 'https://' at the same time
    const secureReq = req.clone({
      url: req.url.replace('http://', 'https://')
    });
    // send the cloned, "secure" request to the next handler.
    return next.handle(secureReq);
  }
}
