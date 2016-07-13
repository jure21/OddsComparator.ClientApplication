import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
 * Directive for highlight element
 */

@Directive({
  selector: '[opacityHighlight]'
})
export class HighlightDirective {
  private el: HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement; }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('0.5');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('1');
  }
  
  private highlight(opacity: string) {
    this.el.style.opacity = opacity;
  }
}
