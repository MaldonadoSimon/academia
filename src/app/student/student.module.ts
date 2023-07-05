import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudenDetailsComponent } from './studen-details/studen-details.component';
import { StudenEditComponent } from './studen-edit/studen-edit.component';
import { StudentRoutingModule } from './student-routing.module';



@NgModule({
  declarations: [
    StudentCreateComponent,
    StudentListComponent,
    StudenDetailsComponent,
    StudenEditComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
