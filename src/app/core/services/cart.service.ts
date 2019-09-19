import { ProductItem } from './../models/productItem.model';
import { Cart } from './../models/cart.model';
import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx';
import { Product } from '../models/product.model';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @observable
  productItems: ProductItem[];

  constructor() {
    this.productItems = [] as ProductItem[];
  }

  //   computed

  @computed get numOfProduct(): number {
    let numOfProducts = 0;
    this.productItems.forEach(pi => (numOfProducts += pi.quantity));
    return numOfProducts;
  }

  @computed get totalPrice(): number {
    let totalPrice = 0;
    this.productItems.forEach(pi => (totalPrice += pi.product.price));
    return totalPrice;
  }

  // actions
  @action addToCart(product: Product) {
    const index = this.productItems.findIndex(
      pi => pi.product.id === product.id
    );
    if (index === -1) {
      this.productItems.push({ product, quantity: 1 });
    } else {
      this.productItems[index].quantity += 1;
    }
  }

  @action removeFromCart(product: Product) {
    const index = this.productItems.findIndex(
      pi => pi.product.id === product.id
    );

    if (index !== -1) {
      this.productItems[index].quantity -= 1;
      if (this.productItems[index].quantity === 1) {
        this.productItems.splice(index, 1);
      }
    }
  }
}
