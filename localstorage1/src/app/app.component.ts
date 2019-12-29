import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localstorage1';
  fun1(){
   localStorage.setItem("sno","100")
   alert(localStorage.getItem("sno"))
  }
}
