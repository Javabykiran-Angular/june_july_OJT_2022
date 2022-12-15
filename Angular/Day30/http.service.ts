import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/employee';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BaseUrl:string=environment.baseurl;


  constructor(private http:HttpClient) { }

  login(obj:any){
   return  (this.http.post(`${this.BaseUrl}login`,obj));
  }

  getEmployee(){
    return (this.http.get(`${this.BaseUrl}getallemployee`));
  }

  getParticularEmpById(id:any){
    return (this.http.get(`${this.BaseUrl}getemployeebyid/${id}`));
  }
  getAllCountry(){
   return (this.http.get(`${this.BaseUrl}getallcountry`));
  }

  AddEmployee(obj:any){
    return (this.http.post(`${this.BaseUrl}addemployee`,obj,{
      responseType:'text'
    }));
  }

  UpdateEmployee(obj:Employee){
      return  (this.http.put(`${this.BaseUrl}updateemployee`,obj,{
          responseType:'text'
        }));
  }

  DeleteEmployee(id:any){
     return (this.http.delete(`${this.BaseUrl}deleteemployee/${id}`,{
      responseType:'text'
    }));
  }


}
