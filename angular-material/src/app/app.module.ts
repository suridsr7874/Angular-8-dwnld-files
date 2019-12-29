import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatSlideToggleModule} from '@angular/material';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material'
import {MatInputModule, MatSelectModule, MatButtonModule, MatRadioModule,MatSliderModule} from '@angular/material';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatInputModule, MatSelectModule, MatButtonModule,MatSidenavModule,
    //  MatSlideToggleModule,
    MatRadioModule, MatSliderModule, FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
