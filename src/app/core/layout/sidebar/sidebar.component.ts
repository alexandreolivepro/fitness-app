import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    class: 'xl:w-64 lg:w-48 md:w-40 sm:w-40',
  },
})
export class SidebarComponent {
}
