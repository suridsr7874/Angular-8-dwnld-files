import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsercommonComponent } from './usercommon/usercommon.component';
import { Routes, RouterModule } from '@angular/router';

const obj : Routes=[
  {path: "", component: UsercommonComponent, children:[
    {path: "login", component:LoginComponent},
    {path: "logout", component: LogoutComponent}
  ]}
]

@NgModule({
  declarations: [LoginComponent, LogoutComponent, UsercommonComponent],
  imports: [
    CommonModule, RouterModule.forChild(obj)
  ]
})
export class UserModule { }
