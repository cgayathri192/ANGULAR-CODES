import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GayathriComponent } from './gayathri/gayathri.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./roles/user/user.module').then(m => m.UserModule)
  },
  {
    path:'user',
    loadChildren:() => import('./roles/user/user.module').then(m => m.UserModule)
  },
  {
    path:'hr',
    loadChildren:() => import('./roles/hr/hr.module').then(m => m.HrModule)
  },
  {
    path:'gayathri',
    component:GayathriComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
