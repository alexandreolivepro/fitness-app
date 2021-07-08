import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LocalStorageService } from '@Services/local-storage/local-storage.service';
import { UserService } from '@Services/user/user.service';
import { OauthStorage } from '@Features/security/models/oauth-token.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IsSignedInGuard implements CanActivate {
  loading = true;

  constructor(
    public router: Router,
    private userService: UserService,
    private localStorageService: LocalStorageService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.user.pipe(
      switchMap((user) => {
        if (user) {
          return this.handleUserAlreadySet(route);
        }
        if (!this.localStorageService.getItem(OauthStorage.ACCESS_TOKEN)) {
          return throwError('User is not loggedin');
        }
        return this.getAuthenticatedUser();
      }),
      catchError((error: HttpErrorResponse | string) => this.handleGuardError(route, error)),
    );
  }

  private handleUserAlreadySet(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.loading = false;
    if (this.isSecurity(route.url)) {
      this.router.navigate(['/dashboard']);
    }
    return of(true);
  }

  private handleGuardError(route: ActivatedRouteSnapshot, err: HttpErrorResponse | string): Observable<boolean> {
    if (!this.isSecurity(route.url)) {
      this.router.navigate(['security', 'login']);
      return of(false);
    }
    this.loading = false;
    return of(true);
  }

  private isSecurity(url: UrlSegment[]): boolean {
    return url.join('') === 'security';
  }

  private getAuthenticatedUser(): Observable<boolean> {
    return this.userService.getConnectedUser().pipe(
      switchMap((user) => {
        this.userService.setUser(user);
        this.router.navigate(['/dashboard']);
        return of(true);
      }),
    );
  }
}
