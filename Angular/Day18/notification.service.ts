import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    // notification = new Subject<string>();
    notification = new BehaviorSubject<string>('');
  constructor() { }

    SendMessage(msg:string){
      this.notification.next(msg)
    }

}
