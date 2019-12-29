import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee detail';
  sno: number = 1;
  name: string = "dhoni";
  gender: string = "male";
  
  email: string = "dhoni ms @gmail.com";
}
