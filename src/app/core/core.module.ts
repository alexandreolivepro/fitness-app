import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { LogoutModule } from '@Features/security/components/logout/logout.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    LogoutModule,
  ],
  exports: [
    MainLayoutComponent,
  ],
})
export class CoreModule { }
