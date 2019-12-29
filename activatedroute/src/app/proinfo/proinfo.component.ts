import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-proinfo',
  templateUrl: './proinfo.component.html',
  styleUrls: ['./proinfo.component.css']
})
export class ProinfoComponent implements OnInit {
var_pid:number;
  constructor(private ar:ActivatedRoute,private ser:S1Service) { 
    this.ar.params.subscribe(dt=>{
      this.var_pid=dt.proid
    })
  }

  ngOnInit() {
  }

}
