import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [CommonModule, MaterialModule, SharedModule]
})
export class ProductsModule {}
