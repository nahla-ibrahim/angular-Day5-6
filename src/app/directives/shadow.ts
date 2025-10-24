import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  host: { '(mouseenter)': 'onMouseEnter()', '(mouseleave)': 'onMouseleave()' },
})
export class Shadow {
  constructor(private el: ElementRef) {
    this.el.nativeElement.className = 'shadow-none';
  }
  onMouseEnter() {
    this.el.nativeElement.className = 'shadow';
  }
  onMouseleave() {
    this.el.nativeElement.className = 'shadow-none';
  }
}
