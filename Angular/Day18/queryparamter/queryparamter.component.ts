import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

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

    dataReceived:string='';

  constructor(private route:ActivatedRoute,
              private notificationService:NotificationService) { }

  ngOnInit(): void {
      this.getDatafromUrl();
      this.getNotificationData();
  }

  getNotificationData(){
      this.notificationService.notification
      .subscribe((data)=>{
        this.dataReceived=data;
      })
  }


  getDatafromUrl(){

      this.route.queryParamMap
      .subscribe((param:any)=>{
          this.myjson.myid=+param.get('id');
          this.myjson.myfname=param.get('fname');
          this.myjson.myactive=param.get('active');
      })

  }

  onSend(msg:string){
    this.notificationService.SendMessage(msg);
  }

}
