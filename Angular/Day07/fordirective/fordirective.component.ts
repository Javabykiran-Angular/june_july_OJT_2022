import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core java','Advanced Java','Spring Boot','JSP','Angular 12'];

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
