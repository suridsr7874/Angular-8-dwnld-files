import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'appD1'
})
export class D1Directive {

  constructor(private ele:ElementRef,private rn:Renderer2) { }
  @HostListener("mouseover") fun1(){
    this.rn.addClass(this.ele.nativeElement,"abc")
    
  }
  
@HostListener("mouseout") fun2(){
  this.rn.removeClass(this.ele.nativeElement,"abc")
}
}
