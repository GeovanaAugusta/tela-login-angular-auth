import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Pages Component
import { SignComponent } from './pages/sign/sign.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
