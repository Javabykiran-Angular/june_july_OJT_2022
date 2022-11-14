import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  appDateData!:any;

  onClick(inputdate:any){
    console.log(inputdate);
    this.appDateData=inputdate;
  }

}
