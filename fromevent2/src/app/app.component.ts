import { Component } from '@angular/core';
import {fromEvent} from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fromevent2';
  constructor(){
    
  }
  ngOnInit(){
    var imgobj=<HTMLImageElement>document.getElementById("i1")
    fromEvent(imgobj,"mousedown").subscribe((dt:MouseEvent)=>{
      if(dt.button==2)
      {
        alert("Can not copy")
      }
      })
  }
}
