import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppComponent } from './app.component';
import {MatSlideToggleModule,MatRadioModule} from "@angular/material"
import {FormsModule} from "@angular/forms"
import {MatSliderModule} from "@angular/material"
import {MatButtonModule} from "@angular/material"
import {MatSidenavModule} from "@angular/material"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [MatSidenavModule,MatSliderModule,MatButtonModule,
    BrowserModule,BrowserAnimationsModule,MatSlideToggleModule,FormsModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
