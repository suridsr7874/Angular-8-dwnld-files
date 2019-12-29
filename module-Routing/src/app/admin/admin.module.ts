import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincommonComponent } from './admincommon/admincommon.component';

import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { Routes , RouterModule} from '@angular/router';

const obj: Routes = [
{path: "", component: AdmincommonComponent, children: [
  {path: "a1" , component: A1Component},
{path: "a2" , component: A2Component},
]}
 ]

@NgModule({
  declarations: [AdmincommonComponent,  A1Component, A2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(obj)
  ]
})
export class AdminModule { }
