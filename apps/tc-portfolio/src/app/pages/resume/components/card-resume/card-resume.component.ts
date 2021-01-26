import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-card-resume',
  templateUrl: './card-resume.component.html',
  styleUrls: ['./card-resume.component.scss']
})
export class CardResumeComponent {
  @Input() size: string;
  @Input() title: string;
  @Input() date: string;
  @Input() status: string;
  @Input() location: string;
  @Input() lightMode: boolean;
}
