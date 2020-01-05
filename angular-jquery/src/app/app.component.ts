import { Component } from '@angular/core';
//import $ from "jquery"
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jquery';
  funhide(){
    $("#div1").hide(2000)
  }
  fun1(){
    $("#div1").animate({width:'400px',height:'400px'},1000)
  }
}
