import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:number=0;
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(myname:any){
    console.log("Change Event Occur....")

    myname.style.background='green';
    myname.style.color='white';

  }

  onKeyUp(){
    console.log("Key Up Event Occur...")
  }

  onKeyDown(){
    console.log("Key Down Event Occur...")
  }

  onKeyFiltering(){
    console.log("Key Filtering Event Occur...")
  }

  onKeyFiltering1(){
    console.log("Key Filtering Event Occur...")
  }

}
