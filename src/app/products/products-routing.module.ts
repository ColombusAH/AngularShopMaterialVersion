import { ProductsPageComponent } from './products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const productsRoutes: Routes = [
  { path: '', component: ProductsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
