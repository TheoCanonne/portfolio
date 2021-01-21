import { Component } from '@angular/core';
import { SocialMediasService } from '../../../core/services/social-medias.service';

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public socialMediasService: SocialMediasService) {}

}
