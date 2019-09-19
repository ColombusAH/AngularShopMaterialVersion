import { ShowIfLoggedInDirective } from './directives/show-if-logged-in.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIfAdminDirective } from './directives/show-if-admin.directive';
import { AddProductTocartDirective } from './directives/add-product-tocart.directive';
import { RemoveProductFromCartDirective } from './directives/remove-product-from-cart.directive';

@NgModule({
  declarations: [
    ShowIfLoggedInDirective,
    ShowIfAdminDirective,
    AddProductTocartDirective,
    RemoveProductFromCartDirective
  ],
  imports: [CommonModule],
  exports: [
    ShowIfLoggedInDirective,
    ShowIfAdminDirective,
    AddProductTocartDirective,
    RemoveProductFromCartDirective
  ]
})
export class SharedModule {}
