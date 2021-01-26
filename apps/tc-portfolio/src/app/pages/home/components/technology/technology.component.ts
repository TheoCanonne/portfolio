import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  @Input() numberStars: number;
  @Input() images: {path:string, title: string}[];
  @Input() lightMode: boolean;

  arrayStars: number[];

  ngOnInit() {
    this.arrayStars = Array(this.numberStars);
  }
}
