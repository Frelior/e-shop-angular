import { Component, Input } from '@angular/core';
import SingleCategory from '../../interfaces/singleCategory';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss',
})
export class CategoryItemComponent {
  @Input() item!: SingleCategory;
}
