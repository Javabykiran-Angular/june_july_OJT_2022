import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    posts:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.service.getPost()
      .subscribe((response)=>{
        console.log(response);
        this.posts=(<any>response);
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

}
