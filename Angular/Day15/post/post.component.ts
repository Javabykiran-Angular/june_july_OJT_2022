import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    posts:any[]=[];
    id:number=0;
    title:string='';
    body:string='';
    isHidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.getPost();      
  }

  getPost(){
    this.service.getPost()
    .subscribe((response)=>{
      console.log(response);
      this.posts=(<any>response);
    },(myerror)=>{
        // alert('Error is occured')
        // console.log(myerror.status)
        if(myerror.status>=400 && myerror.status<=499){
            alert('Client Side Error!!!')
        }else if(myerror.status>=500 && myerror.status<=599){
          alert('Server Side Error!!!')
        } else{

            alert('Unkown Error Occured..')
        }

    })
  }

  onSend(mytitle:string,mybody:string){

    let obj={
      tilte:mytitle,
      body:mybody
    }

    this.service.Postdata(obj)
    .subscribe((response)=>{
      console.log(response);
    })
  }

  onEdit(post:any){
    console.log(post)
    this.id=post.id;
    this.title=post.title;
    this.body=post.body;
    this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response)
    })
  }

  onDelete(id:any){
    this.service.Deletedata(id)
    .subscribe((response)=>{
        console.log(response)
    })
  }

}
