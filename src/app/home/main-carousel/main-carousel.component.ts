import { Component, OnInit } from '@angular/core';
import { mainCarouselData } from 'src/Data/mainCarouselData';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit {
  carouselData: any;
  currentSlide = 0;

  constructor() {}
  ngOnInit(): void {
    this.carouselData = mainCarouselData;
    this.autoPlay();
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}
