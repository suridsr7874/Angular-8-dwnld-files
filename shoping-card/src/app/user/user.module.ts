import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsercommonComponent } from './usercommon/usercommon.component';



@NgModule({
  declarations: [LoginComponent, LogoutComponent, UsercommonComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
