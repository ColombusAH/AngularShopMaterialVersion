import { Directive, Input, HostListener } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Directive({
  selector: '[appRemoveProductFromCart]'
})
export class RemoveProductFromCartDirective {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  @HostListener('click')
  onClick() {
    this.cartService.removeFromCart(this.product);
  }
}
