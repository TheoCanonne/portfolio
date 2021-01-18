import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbLayoutModule } from '@nebular/theme';
import { PortfolioLayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbButtonModule,
    NbLayoutModule,
    PortfolioLayoutModule
  ]
})
export class PagesModule { }
