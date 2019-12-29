import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import { Ad1Component } from './ad1/ad1.component';
import { Ad2Component } from './ad2/ad2.component';
import {Routes, RouterModule} from '@angular/router';

var obj : Routes = [
{path: "", component: AdmincommonComponent, children: [
{path: "a1", component: Ad1Component},
{path: "a2", component: Ad2Component}
]},
]

@NgModule({
  declarations: [AdmincommonComponent, Ad1Component, Ad2Component],
  imports: [
    CommonModule, RouterModule.forChild(obj)
  ]
})
export class AdminModule { }
