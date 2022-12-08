import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  empobj=<Employee>{};


  constructor(private route:ActivatedRoute,
              private service:HttpService) { }

  ngOnInit(): void {
    this.GetUrlData()
  }

  GetUrlData(){
      this.route.paramMap
      .subscribe((param:any)=>{
        // console.log(param.get("id"))
        this.service.getParticularEmpById(param.get("id"))
        .subscribe((response)=>{
          // console.log(response)
          this.empobj=(<any>response)
        })
      })
  }

  OnUpdate(){

  }

}
