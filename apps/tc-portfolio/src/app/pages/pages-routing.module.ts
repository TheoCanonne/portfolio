import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'accueil', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      { path: 'a-propos', loadChildren: () => import('./resume/resume.module').then((m) => m.ResumeModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
      { path: '**', redirectTo: 'accueil' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
