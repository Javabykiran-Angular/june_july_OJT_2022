import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    {
      path:"",redirectTo:"/login",pathMatch:"full"
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'home',component:HomeComponent,canActivate:[AuthGuard]
    },
    {
      path:'details/:id',component:DetailsComponent,canActivate:[AuthGuard]
    },
    {
      path:'addemp',component:AddemployeeComponent,canActivate:[AuthGuard]
    },
    {
      path:"**",component:NotfoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
