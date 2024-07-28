import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from '../category-item/category-item.component';
import {catalogSliderParams} from './swiperParams'



@Component({
  selector: 'app-horizontal-scroller',
  standalone: true,
  imports: [CommonModule, CategoryItemComponent],
  templateUrl: './horizontal-scroller.component.html',
  styleUrl: './horizontal-scroller.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HorizontalScrollerComponent  {
  @Input() data: any[] = ['1', '2', '3', '4', '5', '6'];
  @Input() swiperParams: any;
  @ViewChild('swiper') swiper!: ElementRef;
  catalogSliderParams = catalogSliderParams;

  ngAfterViewInit() {
    const swiperElement = this.swiper.nativeElement;
    Object.assign(swiperElement, this.catalogSliderParams);
    swiperElement.initialize();
  }
}
