import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HorizontalScrollerComponent } from '../../components/horizontal-scroller/horizontal-scroller.component';
import { ProductsService } from '../../services/products/products.service';
import ProductsResponse from '../../interfaces/productsArray';
import SingleCategory from '../../interfaces/singleCategory';
import { CategoryItemComponent } from '../../components/category-item/category-item.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CarouselComponent,
    HorizontalScrollerComponent,
    CategoryItemComponent,
    ProductCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent {
  productsService = inject(ProductsService);
  categories: SingleCategory[] = [];
  discountProducts: any = [];

  constructor() {
    this.productsService
      .getCategories()
      .subscribe((data) => (this.categories = data));

    this.productsService
      .getRandomDiscountProducts(10)
      .subscribe((data: ProductsResponse) => {
        this.discountProducts = data.products;
        console.log(this.discountProducts);
      });
  }
}
