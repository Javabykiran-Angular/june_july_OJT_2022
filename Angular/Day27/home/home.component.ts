import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  p:number=1;
  isradioSelect:boolean=false;
  modalRef!: BsModalRef; 
  empobj=<Employee>{};

  config = {
    animated: true,    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };
    
  constructor(private service:HttpService,
              private modalservice:BsModalService) { }

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

  onRadioClick(emp:Employee){
      // console.log(emp);
      this.isradioSelect=true;
      this.empobj=emp;
  }

  isradioClick():boolean{
      if(this.isradioSelect)
      return true;
      else
      return false;
  }

  onupdate(popup:TemplateRef<any>){
      if(this.isradioClick()){
        // update the record
        this.modalRef=this.modalservice.show(popup,this.config);
      }else{
        alert("Please Select The record...")
      }
  }

}
