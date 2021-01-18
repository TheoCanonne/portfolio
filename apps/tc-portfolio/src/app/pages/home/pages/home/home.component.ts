import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projectsList: { imageName?: string; desc: string; }[] = [
    { imageName: 'raliraid-logo.png', desc: 'Site pour une association participant au 4L Trophy.' },
    { imageName: 'emothep-logo.png', desc: 'Site d\'une entreprise de services informatiques.' }
  ];

  technologiesList: { imagesName?: string[]; numberStars: number; }[] = [
    { imagesName: ['angular-logo.png', 'nodejs-logo.png', 'github-logo.png'], numberStars: 3 },
    { imagesName: ['firebase-logo.png', 'linux-logo.png', 'nginx-logo.png'], numberStars: 2 },
    { imagesName: ['docker-logo.png', 'postgresql-logo.png', 'software-ag-logo.jpg'], numberStars: 1 }
  ];

}
