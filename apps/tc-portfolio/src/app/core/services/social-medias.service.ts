import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediasService {


  openGithubLink() {
    this.openLink('https://github.com/TheoCanonne');
  }
  openLinkedinLink() {
    this.openLink('https://www.linkedin.com/in/Theo-Canonne/');
  }

  openLink(link) {
    window.open(link, '_blank');
  }
}
