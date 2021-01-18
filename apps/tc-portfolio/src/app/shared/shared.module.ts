import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCommonModule } from './nb-common/nb-common.module';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { ParallaxDirective } from './directives/parallax.directive';

const MODULES = [
  CommonModule,
  NbCommonModule
]

const COMPONENTS = [
  MainTitleComponent
]

const DIRECTIVES = [
  ParallaxDirective
]

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
