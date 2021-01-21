import { Component } from '@angular/core';
import { SocialMediasService } from '../../../../core/services/social-medias.service';

@Component({
  selector: 'portfolio-my-light-profil',
  templateUrl: './my-light-profil.component.html',
  styleUrls: ['./my-light-profil.component.scss']
})
export class MyLightProfilComponent {

  constructor(public socialMediasService: SocialMediasService) {}

}
