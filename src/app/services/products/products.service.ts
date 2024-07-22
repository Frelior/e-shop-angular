import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  private baseUrl = 'https://dummyjson.com/products';

  getProductsAll() {
    return this.http.get(this.baseUrl);
  }

  getCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getProductsByCategory(category: string) {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }
}
