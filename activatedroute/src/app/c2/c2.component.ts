import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
var_sno:number=33
var_uname:string='abcd'
  constructor(@Inject(ActivatedRoute) private ar) {
    this.var_sno=999
    this.ar.params.subscribe((dt)=>{
      this.var_sno=dt.sno
      this.var_uname=(dt.un)
    })
   }

  ngOnInit() {
  }

}
