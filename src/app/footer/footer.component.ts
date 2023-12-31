import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  navigateToExternalUrl(url: string) {
    window.open(url, '_blank');
  }
}
