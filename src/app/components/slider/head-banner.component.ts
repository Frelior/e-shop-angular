import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { BannerService } from '../../services/banner/banner.service';
import { bannerSliderParams } from './swiperParams';

@Component({
  selector: 'app-head-banner',
  standalone: true,
  imports: [],
  templateUrl: './head-banner.component.html',
  styleUrl: './head-banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeadBannerComponent {
  bannerService = inject(BannerService);
  swiperElQuery: any;
  bannerSliderParams = bannerSliderParams;
  headBannerImages: HTMLElement[] | any[] = ['1', '2', '3', '4'];

  ngAfterViewInit() {
    this.swiperElQuery = document.querySelector('swiper-container');
    Object.assign(this.swiperElQuery, this.bannerSliderParams);
    this.swiperElQuery.initialize();
  }
  constructor() {
    this.headBannerImages = this.bannerService.getImages();
    console.log(this.headBannerImages);
  }
}
