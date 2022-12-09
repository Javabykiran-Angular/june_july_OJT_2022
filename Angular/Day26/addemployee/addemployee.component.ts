import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  allCountry:any[]=[];


  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllCountry();
  }
  getAllCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
        this.allCountry=response;
      })
  }

  onSubmit(f:NgForm){

    let obj={
      name:f.value.name,
      phoneno:f.value.phoneno,
      departmentit:f.value.departmentit,
      status:f.value.status,
      country:f.value.country,
      createdby:sessionStorage.getItem("username"),
      createddtm:Date.now(),
      updatedby:sessionStorage.getItem("username"),
      updateddtm:Date.now()
    }

    this.service.AddEmployee(obj)
    .subscribe((resppnse)=>{
      console.log(resppnse)
        this.router.navigate(['/home']);
    })

  }

}
