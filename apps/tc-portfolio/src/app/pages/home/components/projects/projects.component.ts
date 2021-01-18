import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() imageName: string;
  @Input() desc: string;

}
