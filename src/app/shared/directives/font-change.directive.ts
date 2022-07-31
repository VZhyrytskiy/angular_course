import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontChange]'
})
export class FontChangeDirective implements OnInit {
  @Input('appFontChange') modifier = '';

  fontSize!: string;
  toggle = false;

  constructor(
    private el: ElementRef,
    private render: Renderer2,
  ) { }

  ngOnInit(): void {
    this.fontSize = getComputedStyle(this.render.selectRootElement(this.el).nativeElement).getPropertyValue('font-size');
  }

  @HostListener('click')
  onMouseClick(): void {
    if (this.toggle) {
      this.render.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
    } else {
      this.render.setStyle(this.el.nativeElement, 'font-size', `${parseInt(this.fontSize) + parseInt(this.modifier)}px`);
    }
    this.toggle = !this.toggle;
  }
}
