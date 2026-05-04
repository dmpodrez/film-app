import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class Autofocus implements AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
}