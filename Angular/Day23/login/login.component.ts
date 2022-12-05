import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  incorrect:string='';

 

  constructor() { }

  ngOnInit(): void {
    document.body.className='background_bg';
  }

  onSubmit(f:NgForm){
      console.log(f.value.email)
      console.log(f.value.password)
  }

}
