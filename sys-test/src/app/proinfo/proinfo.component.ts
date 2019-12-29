import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-proinfo',
  templateUrl: './proinfo.component.html',
  styleUrls: ['./proinfo.component.css']
})
export class ProinfoComponent implements OnInit {
data:string;
  constructor(private ac:ActivatedRoute, private ser:S1Service) {
    this.ac.params.subscribe(dt=>{
      this.data=dt.proid;
    })
   }

  ngOnInit() {
  }

}
