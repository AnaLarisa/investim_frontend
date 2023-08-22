// app.module.ts
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

import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { CalendarPageComponent } from './modules/calendar-module/calendar-page/calendar-page.component';
import { LoginModule } from './authentication/login/login.module';
import { SignUpModule } from './authentication/sign-up/sign-up.module';
import { CalendarModule } from './modules/calendar-module/calendar-module.module';
import { MenuComponent } from './components/shared/menu/menu.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./authentication/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'calendar', component: CalendarPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FullCalendarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    LoginModule,
    SignUpModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
