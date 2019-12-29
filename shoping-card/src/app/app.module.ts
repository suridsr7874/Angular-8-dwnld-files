import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSlideToggleModule} from '@angular/material';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material'
import {MatInputModule, MatSelectModule, MatButtonModule, MatRadioModule,MatSliderModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,MatSlideToggleModule,MatSidenavModule,BrowserAnimationsModule,
    AppRoutingModule, MatInputModule, MatSelectModule, MatButtonModule, MatRadioModule,MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
