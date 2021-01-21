import { Component } from '@angular/core';
import { BreakpointsService } from '../../../core/services/breakpoints.service';

@Component({
  selector: 'portfolio-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
  <nb-layout>
    <nb-layout-header fixed>
      <portfolio-header></portfolio-header>
    </nb-layout-header>
    <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
    </nb-layout-column>
    <nb-sidebar fixed *ngIf="needSidebar$ | async" [state]="breakpointsService.sidebarState" right>
        <ng-content select="nb-menu"></ng-content>
    </nb-sidebar>
    <nb-layout-footer>
      <portfolio-footer></portfolio-footer>
    </nb-layout-footer>
  </nb-layout>`,
})

export class LayoutComponent {

  needSidebar$ = this.breakpointsService.getBreakpointHeader();

  constructor(public breakpointsService: BreakpointsService){}

}
