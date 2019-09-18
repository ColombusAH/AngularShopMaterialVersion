import { ProductItem } from './../models/productItem.model';
import { Cart } from './../models/cart.model';
import { Injectable } from '@angular/core';
import { observable, autorun, computed, action } from 'mobx';
import { Product } from '../models/product.model';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @observable
  cart: Cart;

  constructor() {
    this.cart.productsList = [] as ProductItem[];
  }

  //   coputed

  @computed numOfProduct(): number {
    let numOfProducts = 0;
    this.cart.productsList.forEach(pi => (numOfProducts += pi.quantity));
    return numOfProducts;
  }

  @computed totalPrice(): number {
    let totalPrice = 0;
    this.cart.productsList.forEach(pi => (totalPrice += pi.product.price));
    return totalPrice;
  }

  // actions
  @action addToCart(product: Product) {
    const index = this.cart.productsList.findIndex(
      pi => pi.product.id === product.id
    );
    if (index === -1) {
      this.cart.productsList.push({ product, quantity: 1 });
    } else {
      this.cart.productsList[index].quantity += 1;
    }
  }

  @action removeFromCart(product: Product) {
    const index = this.cart.productsList.findIndex(
      pi => pi.product.id === product.id
    );

    if (index !== -1) {
      if (this.cart.productsList[index].quantity === 1) {
        this.cart.productsList.splice(index, 1);
      }
    } else {
      this.cart.productsList[index].quantity -= 1;
    }
  }
}
