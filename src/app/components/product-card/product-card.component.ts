import { Component, Input } from '@angular/core';
import SingleProduct from '../../interfaces/singleProduct';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() item!: SingleProduct;
}
