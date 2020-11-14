import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dtfAutoFocus]'
})
export class DTFAutoFocusDirective implements AfterContentInit {

  constructor(public el: ElementRef<HTMLInputElement>) { }

  public ngAfterContentInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 250);
  }
}
