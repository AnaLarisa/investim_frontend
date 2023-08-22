import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'signup', component: SignUpComponent }
      // Add any sign-up-related routes here
    ])
  ]
})
export class SignUpModule {}
