import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {



  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  incorrect:string='';

 

  constructor(private loginservice:HttpService,
              private router:Router) { }
  

  ngOnInit(): void {
    document.body.className='background_bg';
  }

  onSubmit(f:NgForm){
      console.log(f.value.email)
      console.log(f.value.password)

      let obj={
        email:f.value.email,
        password:f.value.password
      }

      this.loginservice.login(obj)
      .subscribe((response:any)=>{
        // console.log(response);
        if(response.msg=="Invalid User"){
          this.incorrect=response.msg;
        }else{
          this.incorrect='';
          sessionStorage.setItem("username",response.user.username)
          this.router.navigate(['/home'])
        }

      })

  }

  ngOnDestroy(): void {
    document.body.className='';
  }

}
