import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { SecurityService } from '@Features/security/services/security.service';
import { UserService } from '@Services/user/user.service';
import { MessageService } from 'primeng/api';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    class: 'flex items-center justify-center h-full',
  },
  providers: [
    MessageService,
  ],
})
export class RegisterComponent {
  public form = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
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
  signUp(): void {
    this.loadingBarService.start();
    this.userService.register(this.form.getRawValue()).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Enregistrement réussi! Redirection vers la page de login',
        });
        this.router.navigate(['/security', 'login']);
        this.loadingBarService.complete();
      },
      (err: HttpErrorResponse) => this.handleSignUpError(err),
    );
  }

  private handleSignUpError(err: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail: 'Une erreur est survenue, veuillez réessayer',
    });
    this.loadingBarService.complete();
  }
}
