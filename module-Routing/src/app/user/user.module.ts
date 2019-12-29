import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { U1Component } from './u1/u1.component';
import { U2Component } from './u2/u2.component';
import { UsercommonComponent } from './usercommon/usercommon.component';
import {Routes , RouterModule} from '@angular/router';

const obj: Routes = [
  {path: "" , component: UsercommonComponent, children: [
    {path: 'u1' , component: U1Component},
  {path: 'u2' , component: U2Component},
  ]}
   ]

@NgModule({
  declarations: [U1Component, U2Component, UsercommonComponent],
  imports: [RouterModule.forChild(obj),
    CommonModule
  ]
})
export class UserModule { }
