import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselService } from '../../services/carousel/carousel.service';
import { log } from 'console';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  carouselService = inject(CarouselService);
  images: any = [];

  constructor() {
    this.carouselService.getImages().subscribe((data) => (this.images = data));
  }
}
