import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListuserComponent } from './listuser/listuser.component';
import { DeatiluserComponent } from './deatiluser/deatiluser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';



@NgModule({
  declarations: [
    ListuserComponent,
    DeatiluserComponent,
    UpdateuserComponent,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
