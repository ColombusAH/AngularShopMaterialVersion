import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [CommonModule, MaterialModule]
})
export class ProductsModule {}
