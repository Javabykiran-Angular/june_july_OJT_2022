import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit,AfterViewInit {

    @ViewChild('mydiv') AccessDiv!:ElementRef;

    @ViewChild(Child3Component) ChildComp!:Child3Component;

  constructor() { }
  


  ngOnInit(): void {
    console.log(this.AccessDiv);
  }

  ngAfterViewInit(): void {
    console.log(this.AccessDiv);
    this.AccessDiv.nativeElement.className='mydiv';
  }

  onProperty(){
    this.ChildComp.username='Sumit Raokhande';
  }

  onMethod(){
    this.ChildComp.onClick();
  }

}
