import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProinfoComponent } from './proinfo/proinfo.component';


const routes: Routes = [
  {path: "pi", component: ProinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
