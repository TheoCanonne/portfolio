import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'custom' })
  ],
  exports: []
})
export class CoreModule { }
