import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  t1:string;t2:string;res:string
  fun1(){
    if(this.t1=="")
    this.res="Enter Username"
    else if(this.t1=="admin" && this.t2=="admin123")
    {
      this.res="Valid"
    }
    else
    this.res="Invalid"
  }
}
