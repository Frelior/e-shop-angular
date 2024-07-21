import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private http = inject(HttpClient);
  private imagesUrl: string = 'https://picsum.photos/v2/list?page=2&limit=3';

  getImages() {
    return this.http.get(this.imagesUrl);
  }
}
