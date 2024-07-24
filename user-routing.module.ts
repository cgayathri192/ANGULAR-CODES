import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HolidaysComponent } from "./holidays/holidays.component";
import { LeavesComponent } from "./leaves/leaves.component";
  
const userRoutes : Routes =[
    {
        path:'',
        component: LeavesComponent
    },
    {
        path:'leaves',
        component:LeavesComponent
    },
    {
        path:'holidays',
        component:HolidaysComponent

    }

]

@NgModule({
    imports:[RouterModule.forChild(userRoutes)],
    exports:[RouterModule]
})





export class UserRoutingModule{}
