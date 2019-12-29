import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http2';txt1:string;
  data:object
  constructor(private ht:HttpClient){

  }
  
  funget(){
    this.ht.get("http://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=metric&appid=864454684e0c56c960ac9555ac00425c")
    .subscribe(dt=>{
      this.data=dt
    })
  }
}
