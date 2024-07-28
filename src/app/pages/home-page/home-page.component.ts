import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import ProductsResponse from '../../interfaces/productsArray';
import SingleCategory from '../../interfaces/singleCategory';
import { HeadBannerComponent } from '../../components/head-banner/head-banner.component';
import { HorizontalScrollerComponent } from '../../components/horizontal-scroller/horizontal-scroller.component';
import { CategoryItemComponent } from '../../components/category-item/category-item.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeadBannerComponent,
    HorizontalScrollerComponent,
    CategoryItemComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent {
  productsService = inject(ProductsService);
  categories: SingleCategory[] = [];
  catItems: any[] = [];
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
    console.log(this.categories);

    for (const item of this.categories) {
      this.catItems.push(
        `<app-category-item item="${item}"></app-category-item>`
      );
    }

    console.log(this.catItems);
  }
}
