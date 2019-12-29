import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
t1:string;t2:string;
  constructor(private ser:LoginService) { }
funlogin(){
var obj={uname:this.t1,pwd:this.t2}
this.ser.serLogin(obj).subscribe((dt:any)=>{
  if(dt.result=="Invalid")
  alert("Username/password not valid")
  else
  {
    localStorage.setItem("tok",dt.result)
  }
})
}
  ngOnInit() {
  }

}
