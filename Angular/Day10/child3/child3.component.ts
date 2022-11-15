import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  username:string='Default value';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert("your User name is "+this.username);
  }

}
