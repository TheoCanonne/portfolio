import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[portfolioParallax]'
})
export class ParallaxDirective implements OnInit {
  @Input() portfolioParallax = 1;
  private initialTop = 0;

  constructor(private eleRef: ElementRef) {
  }

  ngOnInit() {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.portfolioParallax)) + 'px'
  }
}
