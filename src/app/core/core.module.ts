import { NgModule } from '@angular/core';
// my modules
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
// components
import { HeaderComponent } from './header/header.component';
// services

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ]
})
export class CoreModule {}
