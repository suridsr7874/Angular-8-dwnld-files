import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,  Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { from } from 'rxjs';
var obj: Routes =[
{path: "c1", component:C1Component}
]
@NgModule({
  declarations: [
    AppComponent,
    C1Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(obj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
