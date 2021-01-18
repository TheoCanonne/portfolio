import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent {
  @Input() title: string;
  @Input() lightMode: boolean;
}
