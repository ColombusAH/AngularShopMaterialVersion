import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  choosedCategory: Category;
  products: Product[];
  constructor(private productService: ProductsService) {
    this.products = this.productService.allProducts;
    this.choosedCategory = { id: 0, title: 'all' };
  }

  categorySelected(category: Category) {
    console.log(category.id);
    this.choosedCategory = category;
  }

  isSelected(c: Category): boolean {
    return this.choosedCategory.id === c.id;
  }
}
