import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'custom' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: []
})
export class CoreModule { }
