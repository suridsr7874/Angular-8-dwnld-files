import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'appD1'
})
export class D1Directive {
  constructor(public ele:ElementRef) { 
    this.ele.nativeElement.style.color="white"
    this.ele.nativeElement.style.backgroundColor="brown"
    this.ele.nativeElement.style.padding="2px"
    this.ele.nativeElement.style.border="10px solid blue"
  }
@HostListener("click") fun1(){
  alert("Clicked")
} 
}
