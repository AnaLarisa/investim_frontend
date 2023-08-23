import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from '@angular/forms';

import { LoginModule } from './authentication/login/login.module';
import { SignUpModule } from './authentication/sign-up/sign-up.module';
import { CalendarModule } from './modules/calendar-module/calendar-module.module';
import { MenuComponent } from './components/shared/menu/menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./authentication/sign-up/sign-up.module').then(m => m.SignUpModule) },
  {path : '' , redirectTo : 'dashboard' , pathMatch : 'full'},
  { path: 'dashboard',  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'calendar',  loadChildren: () => import('./modules/calendar-module/calendar-module.module').then(m => m.CalendarModule)},
  { path: '**', redirectTo: 'dashboard'},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FullCalendarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    LoginModule,
    SignUpModule,
    CalendarModule,
  ],
  providers:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
