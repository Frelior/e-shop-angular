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

  // im getting random range from whole products base, cause all products in base have discount
  getRandomDiscountProducts(amount: number) {
    const maxSkip = 194 - amount;
    const skip = Math.floor(Math.random() * (maxSkip + 1));
    console.log(`skip: ${skip}, maxSkip: ${maxSkip}`);
    return this.http.get(`${this.baseUrl}?limit=${amount}&skip=${skip}`);
  }
}
