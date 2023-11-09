import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentSection: any;
  isNavBarContentOpen: any;

  openNavbarContent(section: any): void {
    this.isNavBarContentOpen = false;
    setTimeout(() => {
      this.isNavBarContentOpen = true;
      this.currentSection = section;
    }, 0);
  }
  closeNavbarContent(): void {
    this.isNavBarContentOpen = false;
  }

  navigateTo(path: any): void {}

  @HostListener('document:click', [`$event`])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickInsideButton = false;
    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });
    if (modalContainer && !clickInsideButton && this.isNavBarContentOpen) {
      this.closeNavbarContent();
    }
  }
}
