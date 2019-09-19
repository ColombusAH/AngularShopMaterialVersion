import { CartService } from './../../core/services/cart.service';
import { Directive, Input, HostListener } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Directive({
  selector: '[appAddProductTocart]'
})
export class AddProductTocartDirective {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  @HostListener('click')
  onClick() {
    this.cartService.addToCart(this.product);
  }
}
