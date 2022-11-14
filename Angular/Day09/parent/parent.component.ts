import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Hopes so u r enjoying Angular Module';

  @Input() AppDateData!:any;


  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'raokhande'
  }
  name:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSend(myname:string){
    this.name=myname;
  }

}
