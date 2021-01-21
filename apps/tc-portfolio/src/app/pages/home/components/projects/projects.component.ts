import { Component, Input } from '@angular/core';
import { SocialMediasService } from '../../../../core/services/social-medias.service';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() imageName: string;
  @Input() desc: string;
  @Input() link: string;

  constructor(public socialMediasService: SocialMediasService) {}
}
