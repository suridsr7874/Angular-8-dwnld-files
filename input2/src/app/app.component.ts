import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data:object
  constructor(private ser:S1Service){
    this.data=this.ser.fundata()
  }
  one_pro_data
  fun1(ob){
    this.one_pro_data=(ob)
  }
}
