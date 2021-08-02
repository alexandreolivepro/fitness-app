import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FitUser, FitUserWithPassword } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceMock {
  private user$: BehaviorSubject<FitUser | null> = new BehaviorSubject<FitUser | null>(null);

  readonly user: Observable<FitUser | null> = this.user$.asObservable();

  public register(user: FitUserWithPassword): Observable<FitUser> {
    return of({});
  }

  public getConnectedUser(): Observable<FitUser & { challengeName: string }> {
    return of({ challengeName: 'password' }).pipe(
      tap((user) => {
        this.setUser(user);
      }),
    );
  }

  public setUser(user: FitUser | null): void {
    this.user$.next(user);
  }
}
