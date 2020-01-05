import { Component } from '@angular/core';
import {fromEvent} from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fromevent3';
  ngOnInit(){
    var obj=<HTMLInputElement>document.getElementById("t1")
    fromEvent(obj,"keydown").subscribe((dt:KeyboardEvent)=>{
      if(dt.keyCode <47 || dt.keyCode>56)
      {
        alert("Enter number only")
        dt.preventDefault()
      }
    })
  }
}
