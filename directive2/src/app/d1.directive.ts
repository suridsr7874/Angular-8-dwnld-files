import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appD1]'
})
export class D1Directive {

  constructor(private ele:ElementRef) { 
    this.ele.nativeElement.style.border="1px solid silver"
    this.ele.nativeElement.style.padding="5px"
    this.ele.nativeElement.style.borderRadius="3px"
    this.ele.nativeElement.style.width="200px"
    this.ele.nativeElement.style.outline="none"
  }
  @HostListener("focus") fun1(){
    this.ele.nativeElement.style.borderColor="blue"
    this.ele.nativeElement.style.boxShadow="0px 0px 5px blue"
  }
@HostListener("blur") fun2(){
  this.ele.nativeElement.style.borderColor="silver"
  this.ele.nativeElement.style.boxShadow="none"

}
}
