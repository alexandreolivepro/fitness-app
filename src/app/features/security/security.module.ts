import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    SecurityRoutingModule,
  ],
})
export class SecurityModule {
}
