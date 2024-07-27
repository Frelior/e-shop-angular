import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import SingleProduct from '../../interfaces/singleProduct';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductCardComponent implements OnInit {
  @Input() item!: SingleProduct;
  discountPrice!: number;
  availabilityStatus!: string;

  ngOnInit() {
    this.discountPrice = +(
      this.item.price *
      ((100 - this.item.discountPercentage) / 100)
    ).toFixed(2);

    this.availabilityStatus =
      this.item.availabilityStatus === 'In Stock'
        ? 'in-stock'
        : this.item.availabilityStatus === 'Low Stock'
        ? 'low-stock'
        : 'out-of-stock';
  }
}
