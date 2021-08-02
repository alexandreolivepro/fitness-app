import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'w-full flex justify-end border-b border-gray-200 p-2',
  },
})
export class HeaderComponent {

}
