import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '@Services/local-storage/local-storage.service';
import { UserService } from '@Services/user/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { OauthStorage, OAuthToken } from '../models/oauth-token.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private readonly basePath = '/api/user/v1';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private userService: UserService,
  ) {
  }

  /*
   * This function will signOut the current user and redirect to the login page
   */
  public logout(): Observable<void> {
    return this.http.post<void>(
      `${this.basePath}/oauth/logout`,
      {},
    ).pipe(tap(() => {
      this.userService.setUser(null);
      this.localStorageService.removeItem(OauthStorage.ACCESS_TOKEN);
    }));
  }

  getAccessToken(body: HttpParams): Observable<OAuthToken> {
    return this.http.post<OAuthToken>(
      `${this.basePath}/oauth/token`,
      body,
    ).pipe(
      tap((token) => {
        if (!token.error) {
          this.localStorageService.setItem(OauthStorage.ACCESS_TOKEN, JSON.stringify(token));
        }
      }),
    );
  }
}
