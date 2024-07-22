import { Component, inject } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HorizontalScrollerComponent } from '../../components/horizontal-scroller/horizontal-scroller.component';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CarouselComponent, HorizontalScrollerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  productsService = inject(ProductsService);
  categories: any = [];

  constructor() {
    this.productsService
      .getCategories()
      .subscribe((data) => (this.categories = data));
    console.log(this.categories);
  }
}
