import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
  <nb-layout>
    <nb-layout-header fixed>
      <portfolio-header></portfolio-header>
    </nb-layout-header>
    <nb-layout-column>
        <ng-content></ng-content>
    </nb-layout-column>
    <nb-layout-footer>
      <portfolio-footer></portfolio-footer>
    </nb-layout-footer>
  </nb-layout>`,
})

export class LayoutComponent {
}
