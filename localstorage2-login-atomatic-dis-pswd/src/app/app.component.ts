import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localstorage2-login';
  t1:string;
  t2:string;
  check:boolean;
  funblur(){
    this.t2=localStorage.getItem(this.t1)
  }
  funlogin(){
    if(this.check==true){
      localStorage.setItem(this.t1,this.t2)
    }
  }
}
