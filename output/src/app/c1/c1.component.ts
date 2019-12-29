import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor() { }
obj={uname:"scott",city:"hyd"}
@Output() me=new EventEmitter()
  ngOnInit() {
  }
  funsend(){
    this.me.emit(this.obj)
    // alert("hii")
  }
}
