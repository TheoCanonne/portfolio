import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MyLightProfilComponent } from './components/my-light-profil/my-light-profil.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { MyInfosComponent } from './components/my-infos/my-infos.component';
import { NbTooltipModule } from '@nebular/theme';



@NgModule({
  declarations: [HomeComponent, MyLightProfilComponent, ProjectsComponent, TechnologyComponent, MyInfosComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NbTooltipModule
  ]
})
export class HomeModule { }
