import { ShowIfLoggedInDirective } from './directives/show-if-logged-in.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIfAdminDirective } from './directives/show-if-admin.directive';
import { AddProductTocartDirective } from './directives/add-product-tocart.directive';
import { RemoveProductFromCartDirective } from './directives/remove-product-from-cart.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowIfLoggedInDirective,
    ShowIfAdminDirective,
    AddProductTocartDirective,
    RemoveProductFromCartDirective
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ShowIfLoggedInDirective,
    ShowIfAdminDirective,
    AddProductTocartDirective,
    RemoveProductFromCartDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
