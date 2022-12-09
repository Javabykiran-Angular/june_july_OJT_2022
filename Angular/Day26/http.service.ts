import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BaseUrl:string='http://localhost:8080/api/';

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


}
