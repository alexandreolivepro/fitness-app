import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '@Features/security/services/security.service';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private router: Router, private securityService: SecurityService) { }

  logout(): void {
    this.securityService.logout().subscribe(() => {
      this.router.navigate(['security', 'login']);
    });
  }
}
