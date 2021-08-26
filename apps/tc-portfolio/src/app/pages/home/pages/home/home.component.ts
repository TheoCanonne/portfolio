import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  projectsList: { imageName?: string; desc: string; link: string }[] = [
    {
      imageName: 'raliraid-logo.png',
      desc: 'Site pour une association participant au 4L Trophy.',
      link: 'http://raliraid.com/',
    },
    {
      imageName: 'emothep-logo.png',
      desc: 'Site d\'une entreprise de services informatiques.',
      link: 'https://e-mothep.fr/',
    },
    {
      imageName: 'fem-ecommerce.png',
      desc: 'Intégration d\'une maquette Front End Mentor. Page d\'accueil d\'un site e-commerce ',
      link: 'https://fem.ecommerce.tc-dev.tech/',
    }
  ];

  technologiesList: {
    images?: { path: string; title: string }[];
    numberStars: number;
  }[] = [
    {
      images: [
        { path: 'angular-logo.png', title: 'Angular' },
        { path: 'nodejs-logo.png', title: 'NodeJS' },
        { path: 'github-logo.png', title: 'Git' },
      ],
      numberStars: 3,
    },
    {
      images: [
        { path: 'firebase-logo.png', title: 'Firebase' },
        { path: 'linux-logo.png', title: 'Linux' },
        { path: 'nginx-logo.png', title: 'Nginx' },
      ],
      numberStars: 2,
    },
    {
      images: [
        { path: 'docker-logo.png', title: 'Docker' },
        { path: 'postgresql-logo.png', title: 'Postgresql - SQL' },
        { path: 'software-ag-logo.png', title: 'Software AG' },
      ],
      numberStars: 1,
    },
  ];
}
