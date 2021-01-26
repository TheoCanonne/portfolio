
import { Component } from '@angular/core';
import { BreakpointsService } from '../core/services/breakpoints.service';
import { MENU_ITEMS } from './pages-menu';


@Component({
  selector: 'portfolio-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <portfolio-layout>
        <router-outlet></router-outlet>
        <nb-menu (click)="breakpointsService.toggleSidebar()" [items]="menu"></nb-menu>
    </portfolio-layout>
  `,
})
export class PagesComponent {
  public menu = MENU_ITEMS;

  constructor(public breakpointsService: BreakpointsService) { }
}
