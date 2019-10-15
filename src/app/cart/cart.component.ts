import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeFromCart(item) {
    this.cartService.removeItem(item);
    window.alert(`Item ${item.name} was successfully removed`);
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    
  }

}
