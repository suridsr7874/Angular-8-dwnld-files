import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private ser:S1Service) { }

  ngOnInit() {
    this.ser.myevent.subscribe(dt=>{
      alert("Comp2 "+dt)
    })
  }

}
