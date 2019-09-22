import { ProductsService } from './../../core/services/products.service';
import { Component, Inject } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent {
  productForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private fb: FormBuilder,
    private productService: ProductsService
  ) {
    this.productForm = this.fb.group({
      category: [product.categoryId, Validators.required],
      imageUrl: [product.imageUrl, Validators.required],
      title: [product.title, Validators.required],
      price: [product.price, Validators.required],
      description: [product.description]
    });
  }

  get imageUrl() {
    return this.productForm.get('imageUrl');
  }

  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  get description() {
    return this.productForm.get('description');
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.product = { ...this.productForm.value, id: this.product.id };
      this.productService.updateProduct(this.product);
    }
  }
}
