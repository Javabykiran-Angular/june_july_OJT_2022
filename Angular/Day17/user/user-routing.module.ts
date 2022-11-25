import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeatiluserComponent } from './deatiluser/deatiluser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {
    path:"",component:ListuserComponent
  },
  {
    path:"details",component:DeatiluserComponent
  },
  {
    path:"update",component:UpdateuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
