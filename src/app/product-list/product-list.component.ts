import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    // eslint-disable-next-line no-alert
    window.alert('The product has been shared!');
  }

  onNotify() {
    // eslint-disable-next-line no-alert
    window.alert('You will be notified when the product goes on sale');
  }
}
