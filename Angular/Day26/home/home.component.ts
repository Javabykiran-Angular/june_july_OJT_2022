import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  p:number=1;
    
  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.getEmp();
     
      
  }
  
  getEmp(){
    this.service.getEmployee()
      .subscribe((response)=>{
        console.log(response)

        this.empData=(<any>response);

      })
  }

}
