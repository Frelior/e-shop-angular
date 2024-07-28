import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
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
  @ViewChild('swiper') swiper!: ElementRef;
  bannerSliderParams = bannerSliderParams;
  headBannerImages: HTMLElement[] | any[] = ['1', '2', '3', '4'];

  ngAfterViewInit() {
    const swiperElement = this.swiper.nativeElement;
    Object.assign(swiperElement, this.bannerSliderParams);
    swiperElement.initialize();
  }
  constructor() {
    this.headBannerImages = this.bannerService.getImages();
  }
}
