import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse, HttpClient,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LocalStorageService } from '@Services/local-storage/local-storage.service';
import { catchError } from 'rxjs/operators';
import { OauthStorage } from '../models/oauth-token.model';
import { SecurityService } from '../services/security.service';

@Injectable()
export class InterceptorOutGoing implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService, private securityService: SecurityService) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenStr = this.localStorageService.getItem(OauthStorage.ACCESS_TOKEN);
    let bearer = '';
    if (tokenStr) {
      const token = JSON.parse(tokenStr);
      bearer = `Bearer ${token.access_token}`;
    }
    return next.handle(httpRequest.clone({ setHeaders: { Authorization: bearer } })).pipe(
      catchError((error: HttpErrorResponse) => this.handleErrorUnauthorized(error)),
    );
  }

  handleErrorUnauthorized(httpError: HttpErrorResponse): Observable<never> {
    if (httpError.status === 401 && httpError.error.error === 'invalid_token') {
      return this.securityService.logout() as never;
    }
    return throwError(httpError);
  }
}
