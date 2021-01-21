
import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';


@Component({
  selector: 'portfolio-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <portfolio-layout>
        <router-outlet></router-outlet>
        <nb-menu [items]="menu"></nb-menu>
    </portfolio-layout>
  `,
})
export class PagesComponent {
  public menu = MENU_ITEMS;
}
