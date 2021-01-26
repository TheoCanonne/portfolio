import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-date-resume',
  templateUrl: './date-resume.component.html',
  styleUrls: ['./date-resume.component.scss']
})
export class DateResumeComponent {
  @Input() text: string;

}
