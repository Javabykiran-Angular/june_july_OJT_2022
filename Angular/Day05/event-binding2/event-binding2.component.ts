import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onDollerEvent(myevent:any){
    console.log(myevent);
    console.log("data is => "+myevent.target.value);
  }

  onSend(myinput:any){
      console.log(myinput);
      console.log("Data is => "+myinput.value);
      myinput.style.background='green';
      myinput.style.color='white';
  }

  onSend1(myvalue:any){
    console.log("Data is "+myvalue);
  }

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

    this.result=n1+n2;
  }

}
