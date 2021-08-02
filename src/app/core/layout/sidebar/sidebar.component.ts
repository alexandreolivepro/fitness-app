import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    class: 'xl:w-64 lg:w-48 md:w-40 sm:w-40 border-r border-gray-200',
  },
})
export class SidebarComponent {
  items: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-fw pi-book', routerLink: '/dashboard' },
    { label: 'Workouts', icon: 'pi pi-fw pi-calendar-plus', routerLink: '/workout' },
    { label: 'Friends', icon: 'pi pi-fw pi-users', routerLink: '/user' },
  ];
}
