import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import ProductsResponse from '../../interfaces/productsArray';
import SingleCategory from '../../interfaces/singleCategory';

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
    return this.http.get<SingleCategory[]>(`${this.baseUrl}/categories`);
  }

  getProductsByCategory(category: string) {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }

  // im getting random range from whole products base, cause all products in base have discount
  getRandomDiscountProducts(amount: number) {
    const maxSkip = 194 - amount;
    const skip = Math.floor(Math.random() * (maxSkip + 1));
    return this.http.get<ProductsResponse>(
      `${this.baseUrl}?limit=${amount}&skip=${skip}`
    );
  }
}
