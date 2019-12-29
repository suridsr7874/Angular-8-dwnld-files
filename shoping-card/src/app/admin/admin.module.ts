import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes=[
{path: "", component:AdmincommonComponent, children: [
  {path: "hm", component: HomeComponent},
  {path: "ab", component: AboutUsComponent},
  {path: "cn", component: ContactUsComponent}
] }
]

@NgModule({
  declarations: [HomeComponent, AboutUsComponent, ContactUsComponent, AdmincommonComponent,
    ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
