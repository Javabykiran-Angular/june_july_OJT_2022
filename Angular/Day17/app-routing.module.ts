import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TelevisionComponent } from './product/television/television.component';
import { QueryparamterComponent } from './queryparamter/queryparamter.component';


const routes: Routes = [
      // {
      //   path:"",component:HomeComponent
      // },
      {
        path:'',component:Page1Component
      },
      {
        path:'Page2/:id',component:Page2Component
      },
      {
        path:'Page3/:id/:username',component:Page3Component
      },
      {
        path:'Follower',component:FollowerComponent
      },
      {
        path:'Myfollower',component:MyfollowerComponent
      },
      {
        path:'queryparameter',component:QueryparamterComponent
      },
      {
        path:'products',children:[
          {
            path:"",component:ProductComponent
          },
          {
            path:"mobile",component:MobileComponent
          },
          {
            path:"laptop",component:LaptopComponent
          },
          {
            path:"television",component:TelevisionComponent
          }
        ]
      },
      {
        path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
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
