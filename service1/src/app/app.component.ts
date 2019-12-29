import { Component, Inject } from '@angular/core';
// tslint:disable-next-line: quotemark
import {S1Service} from "./s1.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(S1Service) private ser) {

    alert(ser.sno);
  }
}
