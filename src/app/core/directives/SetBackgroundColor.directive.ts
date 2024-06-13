import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
  standalone: true
})
export class SetBackgroundDirective {
  colors = ['#d84000','#5179a1','#8d67ab','#e8115b','#a56752','#503750','#777777','#777777','#e1118c','#148a08','#ba5d07','#bc5900','#1e3264','#dc148c']

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.setBackgroundColor(this.colors[Math.floor(Math.random() * this.colors.length)]);
  }

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}
