import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesComponent } from './policies/policies.component';
import { hrRoutingModule } from './hr-routing.module';



@NgModule({
  declarations: [
    PoliciesComponent
  ],
  imports: [
    CommonModule,
    hrRoutingModule
  ]
})
export class HrModule { }
