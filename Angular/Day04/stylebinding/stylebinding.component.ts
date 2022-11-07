import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='red';
  mycolor1:string='#0A95FF';
  rating:number=21;

  jsonObj={
    color:'red',
    fontFamily:'Trebuchet MS',
    'font-size':'32px',
    textTransform:'uppercase'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
