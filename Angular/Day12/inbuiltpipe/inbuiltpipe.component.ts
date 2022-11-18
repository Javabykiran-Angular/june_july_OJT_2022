import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {

  strdata:string='U are learn Angular 12 From Sumit raokhande';

  num2:number=-452.78956324557;
  mydate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
