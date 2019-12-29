import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C2Component } from './c2/c2.component';
import { C1Component } from './c1/c1.component';
import { LoginComponent } from './login/login.component';
import { ErrComponent } from './err/err.component';
import { GaurdService } from './gaurd.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"c1",component:C1Component,
  canActivate:[GaurdService],data:{rl:'manager'}},
  {path:"c2",component:C2Component,
  canActivate:[GaurdService],data:{rl:'user'}},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
{path:"**",component:ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
