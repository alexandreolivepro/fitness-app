import { Component } from '@angular/core';
import { UserService } from '@Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public userService: UserService) {

  }

  login(): void {
    this.userService.login();
  }
}
