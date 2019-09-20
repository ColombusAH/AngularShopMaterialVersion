import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';

@NgModule({
  declarations: [ProductsPageComponent, EditProductDialogComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  entryComponents: [EditProductDialogComponent]
})
export class ProductsModule {}
