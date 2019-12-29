import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  // tslint:disable-next-line: quotemark
  {path: '' , component:HomeComponent},
  {path: "hm" , component: HomeComponent},
  {path: 'ab' , component: AboutUsComponent},
  {path: 'cn' , component: ContactUsComponent},
  {path: '**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
