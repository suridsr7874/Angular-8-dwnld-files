import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "ad" , loadChildren:"./admin/admin.module#AdminModule"},
  {path: "us" , loadChildren: "./user/user.module#UserModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
