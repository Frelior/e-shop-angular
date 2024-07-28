import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import bannerImageObject from '../../interfaces/services/bannerServiceInterface';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private http = inject(HttpClient);
  private imagesUrl: string = 'https://picsum.photos/v2/list?page=2&limit=3';

  getImages() : string[] | [] {
    let images: string[] | [] = [];
    this.http
      .get<bannerImageObject[]>(this.imagesUrl)
      .pipe(
        map((data) => data.map((item) => item.download_url)),
        catchError((error) => {
          console.error('Error fetching images:', error);
          return of([]);
        })
      )
      .subscribe((downloadUrls: string[]) => {
        images = downloadUrls;
      });

    return images;
  }
}
