import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HorizontalScrollerComponent } from '../../components/horizontal-scroller/horizontal-scroller.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CarouselComponent, HorizontalScrollerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
