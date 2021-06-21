import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isConnected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  readonly isConnected: Observable<boolean> = this.isConnected$.asObservable();

  login(): void {
    this.isConnected$.next(true);
  }

  logout(): void {
    this.isConnected$.next(false);
  }
}
