import { NgModule } from '@angular/core';
import { NgxVerticalTimelineModule } from 'ngx-vertical-timeline';
import { SharedModule } from '../../shared/shared.module';
import { ResumeComponent } from './pages/resume/resume.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { DateResumeComponent } from './components/date-resume/date-resume.component';
import { CardResumeComponent } from './components/card-resume/card-resume.component';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface  } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [ResumeComponent, DateResumeComponent, CardResumeComponent],
  imports: [
    SharedModule,
    ResumeRoutingModule,
    NgxVerticalTimelineModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class ResumeModule { }
