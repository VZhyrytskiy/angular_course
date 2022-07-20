import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color') bgColor!: string;
  @HostListener('mouseover') onMouseOver() { this.bgColor = '#a7c5cf'; }
  @HostListener('mouseout') onMouseOut() { this.bgColor = 'unset'; }
}

