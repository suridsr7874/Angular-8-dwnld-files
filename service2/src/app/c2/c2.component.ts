import { Component, OnInit, Inject } from '@angular/core';
import {S2Service} from '../s2.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(@Inject(S2Service) private ser) { }

  ngOnInit() {
  }

}
