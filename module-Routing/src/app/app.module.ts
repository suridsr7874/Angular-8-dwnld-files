import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmincommonComponent } from './admin/admincommon/admincommon.component';
import { UsercommonComponent } from './user/usercommon/usercommon.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmincommonComponent,
    UsercommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
