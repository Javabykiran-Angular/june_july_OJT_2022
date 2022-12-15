import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { DialogService } from '../utility/dialog.service';
import { ToastrService  } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

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

  nameSearch:string='';
    
  constructor(private service:HttpService,
              private modalservice:BsModalService,
              private dialogservice:DialogService,
              private toaster:ToastrService,
              private title:Title) { }

  ngOnInit(): void {
      this.getEmp();
     this.title.setTitle("Admin | Dashboard")
      
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
        // alert("Please Select The record... to update")
        this.toaster.warning("Please Select The record... to update","Record Select");
      }
  }

  onDelete(){

    if(this.isradioClick()){
      // Delete the record
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        // console.log(res)
        if(res){
          //delete record
          this.service.DeleteEmployee(this.empobj.id)
          .subscribe((response)=>{
            // console.log(response)
            this.toaster.success(response);
            this.isradioSelect=false;
            this.getEmp();
          })
        }else{
          //don't delete
        }
      })
     
    }else{
      // alert("Please Select The record...to delete")
      this.toaster.error("Please Select The record...to delete")
    }

  }

}
