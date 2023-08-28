import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import {RouterModule} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ManagerComponent,
    NoteDetailsComponent,
    NoteEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'manager', component: ManagerComponent}
    ]),
    MatDividerModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
  ]
})
export class ManagerModule { }
