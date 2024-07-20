import { Component } from '@angular/core';
import { Carousel01Component } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Carousel01Component],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
