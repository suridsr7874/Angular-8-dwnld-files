import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import {NgxPaginationModule} from "ngx-pagination"
import {Ng2SearchPipeModule} from "ng2-search-filter"
import {OrderModule} from "ngx-order-pipe"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [Ng2SearchPipeModule,OrderModule,
    BrowserModule,HttpClientModule,FormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
