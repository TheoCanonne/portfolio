import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbThemeModule} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({name: 'custom'})
  ],
  exports: [NbThemeModule]
})
export class ThemeModule {}
