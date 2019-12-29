import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
tmp;
  constructor(private ser: S1Service) { 
    this.ser.myevent.subscribe(dt=>{
      this.tmp=(dt.sno)
      alert("from comp 3")
    })
  }

  ngOnInit() {
  }

}
