import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router1';
  // tslint:disable-next-line: no-inferrable-types
  name: string = 'Router Link';
}
