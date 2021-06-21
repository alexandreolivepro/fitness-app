import { Component } from '@angular/core';
import { UserService } from '@Services/user/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  host: {
    class: 'w-screen h-screen flex flex-row',
  },
})
export class MainLayoutComponent {
  constructor(public userService: UserService) {}
}
