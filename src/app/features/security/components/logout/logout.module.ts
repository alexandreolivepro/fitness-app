import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LogoutComponent } from './logout.component';

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
    LogoutComponent,
  ],
})
export class LogoutModule { }
