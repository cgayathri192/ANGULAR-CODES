import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './leaves/leaves.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    LeavesComponent,
    HolidaysComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
