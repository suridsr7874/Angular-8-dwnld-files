import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
username:string="";
password:string="";
msg:string="";

  CheckLogin(txt1) {
if(this.username==="jeeva" && this.password==="athma") {
  this.msg="successfull Login";
}
else{
  this.msg="invalid login";
  txt1.focus();
}
  }


}

