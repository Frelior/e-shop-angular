import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [
    ThemeDirective,
    CarouselComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink,
  ],
})
export class Carousel01Component implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://prd-sc102-cdn.rtx.com/-/media/ca/product-assets/marketing/s/space/space-symposium-graphic_1920x1080.jpg?rev=2a22f490c9c644a5bf69ef3cce59813d',
    };
    this.slides[1] = {
      src: 'https://www.nasa.gov/wp-content/uploads/2024/03/niacartchallenge.png',
    };
    this.slides[2] = {
      src: 'https://cdn.mos.cms.futurecdn.net/9UmWCbyxpKaEGXjwFG7dXo.jpg',
    };
  }
}
