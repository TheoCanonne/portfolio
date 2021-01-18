
import { Component } from '@angular/core';


@Component({
  selector: 'portfolio-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <portfolio-layout>
      <router-outlet></router-outlet>
    </portfolio-layout>
  `,
})
export class PagesComponent {
}
