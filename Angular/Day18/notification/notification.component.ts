import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  dataReceived:string='';
  constructor(private NotifyService:NotificationService) { }

  ngOnInit(): void {
    this.getNotificationData();
  }

  getNotificationData(){
      this.NotifyService.notification
      .subscribe((data)=>{
          this.dataReceived=data;
      })
  }


}
