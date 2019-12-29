import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { ProinfoComponent } from './proinfo/proinfo.component';

const routes: Routes = [
  {path:"c1path",component:C1Component},
  {path:"c2path",component:C2Component},
  {path:"pi",component:ProinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
