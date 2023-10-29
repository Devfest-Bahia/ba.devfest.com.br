import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devfestba';
  bannerImage: string;

  constructor(private router: Router) {
    this.bannerImage = '../assets/DF23-Logo-2650-Red.svg';
    this.updateBanner();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  navigateToExternalUrl(url: string) {
    window.open(url, '_blank');
  }

  updateBanner() {
    const width = window.innerWidth;
    if (width >= 1582) {
      this.bannerImage = '../assets/DF23-Logo-2650-Red.svg';
    } else if (width <= 640) {
      this.bannerImage = '../assets/DF23-Logo-640-Red.svg';
    } else {
      this.bannerImage = '../assets/DF23-Logo-1440-Red.svg';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateBanner();
  }
}

