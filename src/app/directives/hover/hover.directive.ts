import { Directive, ElementRef, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input('appHover') color: string;
  constructor(private el: ElementRef, private render: Renderer2) {
    // console.log(el.nativeElement);
    // render.setStyle(el.nativeElement, 'background-color', 'red');
  }

  ngOnInit() {
    this.render.setStyle(this.el.nativeElement, 'background-color', this.color);
    this.render.addClass(this.el.nativeElement, 'form-control');
  }

  @HostListener('mouseover') onmouseover() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseout') onmouseout() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'white');
  }

  @HostListener('click') onclick() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }
}
