import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private ser: S1Service ) { }
fun1(){
 this.ser.myevent.emit({sno:100})
}
  ngOnInit() {
  }

}
