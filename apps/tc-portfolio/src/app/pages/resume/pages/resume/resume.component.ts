import { Component } from '@angular/core';
import { SocialMediasService } from '../../../../core/services/social-medias.service';
import { SwiperOptions } from 'swiper';
import { BreakpointsService } from '../../../../core/services/breakpoints.service';

@Component({
  selector: 'portfolio-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public smallScreen$ = this.breakpointsService.getBreakpointResume();
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1.5,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: 50,
    watchSlidesProgress: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1.5,
        spaceBetween: 40
      }
    },
  };
  public index = 0;

  constructor(
    private breakpointsService: BreakpointsService,
    public socialMediasService: SocialMediasService
  ) {}
}
