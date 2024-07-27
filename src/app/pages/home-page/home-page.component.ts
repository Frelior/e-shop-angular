import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { BannerService } from '../../services/banner/banner.service';
import ProductsResponse from '../../interfaces/productsArray';
import SingleCategory from '../../interfaces/singleCategory';
import { HeadBannerComponent } from '../../components/slider/head-banner.component';
import { bannerSliderParams } from '../../components/slider/swiperParams';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeadBannerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent {
  productsService = inject(ProductsService);
  categories: SingleCategory[] = [];
  discountProducts: any = [];

  constructor() {
    //
    this.productsService.getCategories().subscribe((data) => {
      this.categories = data;
      // i need this for request an image from the server, in category-item component
      for (const item of this.categories) {
        item.formattedName = item.name.replace(' ', '+');
      }
    });
    //
    this.productsService
      .getRandomDiscountProducts(10)
      .subscribe((data: ProductsResponse) => {
        this.discountProducts = data.products;
      });
    //
  }
}
