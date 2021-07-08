import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { OAuthToken } from '@Features/security/models/oauth-token.model';
import { SecurityService } from '@Features/security/services/security.service';
import { UserService } from '@Services/user/user.service';
import { MessageService } from 'primeng/api';
import { switchMap } from 'rxjs/operators';
import { FitUserWithChallengeName } from 'src/app/shared/models/user.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    MessageService,
  ],
  host: {
    class: 'flex items-center justify-center h-full',
  },
})
export class LoginComponent {
  public form = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    public userService: UserService,
    private securityService: SecurityService,
    private router: Router,
    private loadingBarService: LoadingBarService,
    private messageService: MessageService,
  ) {

  }

  /*
   * This function will be called on click on the submit button in the profileForm
   * It will redirect the user on success or show an adapted error message
   */
  signIn(): void {
    this.loadingBarService.start();
    this.getAccessTokenAndReturnUser(
      this.form.value.email,
      this.form.value.password,
    ).pipe(
      switchMap((user) => {
        let redirect = 'dashboard';
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          redirect = 'security/reset-password';
        }
        return of(this.router.navigate([redirect]));
      }),
    ).subscribe(() => this.loadingBarService.complete(), (err: HttpErrorResponse) => this.handleSignInError(err));
  }

  private handleSignInError(err: HttpErrorResponse): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Informations érronées',
      detail: 'Votre email ou mot de passe est éronné, veuillez réessayer',
    });
    this.loadingBarService.complete();
  }

  private getAccessTokenAndReturnUser(email: string, password: string): Observable<FitUserWithChallengeName> {
    const formData = new HttpParams()
      .set('username', email)
      .set('password', password);
    return this.securityService.getAccessToken(formData).pipe(
      switchMap((token: OAuthToken) => this.userService.getConnectedUser()),
    );
  }
}
