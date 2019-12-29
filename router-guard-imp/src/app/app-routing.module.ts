import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AbcComponent } from './abc/abc.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { S1Service } from './s1.service';


const routes: Routes = [
  {path:"hm", component: HomeComponent},
  {path:"ab", component: AboutComponent, canActivate: [S1Service]},
  {path:"cn", component: ContactComponent, canActivate: [S1Service]},
  {path:"abc", component: AbcComponent},
  {path:"login", component: LoginComponent},
  {path:"logout", component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
