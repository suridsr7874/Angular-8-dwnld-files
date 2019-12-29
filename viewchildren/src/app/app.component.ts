import { Component, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchildren';
  alldata = 123;
  @ViewChildren(ChildComponent)
  data: QueryList<ChildComponent> = new QueryList()
  fun1(){
    alert(this.alldata.last.x)
    this.alldata.last.x = "amith"
    this.alldata.last.y = 1234
  }
  constructor(){
  
  }
  ngOnInit(): void {
     }
  ngAfterViewInit(): void {
    this.alldata = this.data
    
  }
}
