import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
t1:string;
t2:string;
  constructor() { }
logfun(){
  if(this.t1=="suri" && this.t2=="dsr"){
    localStorage.setItem("aut", "123")
  }
  else{
    alert("invalid")
  }
}
  ngOnInit() {
  }

}
