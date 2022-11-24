import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparamter',
  templateUrl: './queryparamter.component.html',
  styleUrls: ['./queryparamter.component.css']
})
export class QueryparamterComponent implements OnInit {

    myjson={
      myid:0,
      myfname:'',
      myactive:''
    }

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.getDatafromUrl();
  }
  getDatafromUrl(){

      this.route.queryParamMap
      .subscribe((param:any)=>{
          this.myjson.myid=+param.get('id');
          this.myjson.myfname=param.get('fname');
          this.myjson.myactive=param.get('active');
      })

  }

}
