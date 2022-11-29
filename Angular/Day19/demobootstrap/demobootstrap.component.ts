import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


  arrTeam=[
    {
      name:'Virat',
      strikerate:141,
      batavg:52.77,
      place:'Delhi'
    },
    {
      name:'Rohit',
      strikerate:139,
      batavg:33,
      place:'Nagpur'
    },
    {
      name:'Pandya',
      strikerate:180,
      batavg:25,
      place:'Gujarat'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
