import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@Services/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { FitUser, FitUserWithPassword } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService<FitUser> {
  private user$: BehaviorSubject<FitUser | null> = new BehaviorSubject<FitUser | null>(null);

  readonly user: Observable<FitUser | null> = this.user$.asObservable();

  constructor(
    protected http: HttpClient,
  ) {
    super(http);
    this.basePath = '/api/user/v1';
    this.path = '/user';
  }

  /*
   * This function will signOut the current user and redirect to the login page
   */
  public register(user: FitUserWithPassword): Observable<void> {
    return this.http.post<void>(
      `${this.basePath}${this.path}`,
      user,
    );
  }

  public getConnectedUser(): Observable<FitUser & { challengeName: string }> {
    return this.http.get<FitUser & { challengeName: string }>(
      `${this.basePath}/oauth/user`,
      {},
    ).pipe(
      tap((user) => {
        this.setUser(user);
      }),
    );
  }

  public setUser(user: FitUser | null): void {
    this.user$.next(user);
  }
}
