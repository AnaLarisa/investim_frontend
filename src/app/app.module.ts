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
import {UserModule} from "./modules/user/user.module";
import {NewspaperModule} from "./modules/newspaper/newspaper.module";
import {ManagerModule} from "./modules/manager/manager.module";
import {ChatModule} from "./modules/chat/chat.module";
import {NewsComponent} from "./components/shared/news/news.component";
import {NgOptimizedImage} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import { FromManagerComponent } from './components/shared/from-manager/from-manager.component';
import { TeamInformationComponent } from './components/shared/team-information/team-information.component';
import { InspectProgressComponent } from './components/shared/inspect-progress/inspect-progress.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ProgressModule} from "./modules/progress/progress.module";

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./authentication/sign-up/sign-up.module').then(m => m.SignUpModule) },
  {path : '' , redirectTo : 'dashboard' , pathMatch : 'full'},
  { path: 'dashboard',  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'calendar',  loadChildren: () => import('./modules/calendar-module/calendar-module.module').then(m => m.CalendarModule)},
  { path: 'user',  loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  { path: 'newspaper',  loadChildren: () => import('./modules/newspaper/newspaper.module').then(m => m.NewspaperModule)},
  { path: 'manager',  loadChildren: () => import('./modules/manager/manager.module').then(m => m.ManagerModule)},
  { path: 'chat',  loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule)},
  { path: '**', redirectTo: 'dashboard'},
];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        NewsComponent,
        FromManagerComponent,
        TeamInformationComponent,
        InspectProgressComponent,
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
    UserModule,
    NewspaperModule,
    ManagerModule,
    ChatModule,
    NgOptimizedImage,
    MatGridListModule,
    MatDialogModule,
    ProgressModule,
  ],
    providers: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
