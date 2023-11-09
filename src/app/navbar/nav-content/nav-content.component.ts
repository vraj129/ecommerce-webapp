import { Component, Input, OnInit } from '@angular/core';
import { navigation } from './nav-content';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
})
export class NavContentComponent implements OnInit {
  category: any;
  @Input()
  selectedSection: any;

  ngOnInit(): void {
    if (this.selectedSection === 'men') {
      this.category = navigation.categories[1];
    } else {
      this.category = navigation.categories[0];
    }
  }
}
