import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercommonComponent } from './usercommon/usercommon.component';
import { Us1Component } from './us1/us1.component';
import { Us2Component } from './us2/us2.component';
import {Routes, RouterModule} from '@angular/router';
var obj: Routes = [
  {path: "", component: UsercommonComponent, children: [
    {path: "u1", component: Us1Component},
    {path: "u2", component: Us2Component}
  ]}
]


@NgModule({
  declarations: [UsercommonComponent, Us1Component, Us2Component],
  imports: [
    CommonModule, RouterModule.forChild(obj)
  ]
})
export class UserModule { }
