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


    selected:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse over Event Occur  -->")
    this.selected=item.name;
  }

  onMouseOut(){
    // console.log("---- Mouse out Occur ------")
    this.selected='';
  }

  onShowMore(){
    this.arrTeam=[
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
      },
      {
        name:'Pandya1',
        strikerate:180,
        batavg:35,
        place:'Gujarat1'
      },
      {
        name:'Pandya2',
        strikerate:190,
        batavg:45,
        place:'Gujarat2'
      }
    ]
  }

  mytrackby(index:any,item:any){
    return index;
  }

}
