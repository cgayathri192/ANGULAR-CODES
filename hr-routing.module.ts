import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PoliciesComponent } from "./policies/policies.component";
 

const hrRoutes :   Routes = [
    {
        path:'',
        component:PoliciesComponent
    },
    {
        path:'policies',
        component:PoliciesComponent
    }
    
]

@NgModule({
  imports:[RouterModule.forChild(hrRoutes)],
  exports:[RouterModule]
})
export class hrRoutingModule{}