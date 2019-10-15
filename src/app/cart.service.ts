import { Injectable } from '@angular/core';
// eslint-disable-next-line no-unused-vars
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [];

  constructor(
    // eslint-disable-next-line no-unused-vars
    private http: HttpClient,
  // eslint-disable-next-line no-empty-function
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(product) {
    this.items.splice(this.items.indexOf(product), 1);
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
