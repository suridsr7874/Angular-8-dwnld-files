import { Component, Inject } from '@angular/core';
import {S2Service} from './s2.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service2';
  constructor(@Inject(S2Service) private ser) {

    alert(ser.sno);
  }
}
