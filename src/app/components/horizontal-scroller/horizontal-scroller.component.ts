import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from '../category-item/category-item.component';

@Component({
  selector: 'app-horizontal-scroller',
  standalone: true,
  imports: [CommonModule, CategoryItemComponent],
  templateUrl: './horizontal-scroller.component.html',
  styleUrl: './horizontal-scroller.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HorizontalScrollerComponent {}
