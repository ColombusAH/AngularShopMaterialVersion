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
  allProducts: Product[];
  constructor(private productService: ProductsService) {
    this.allProducts = this.products = this.productService.allProducts;
    this.choosedCategory = { id: '0', title: 'all' };
  }

  categorySelected(category: Category) {
    this.products = this.allProducts.filter(
      product =>
        category.title.toLowerCase() === 'all' ||
        product.categoryId === category.id
    );
    console.log(this.products);
  }

  isSelected(c: Category): boolean {
    return this.choosedCategory.id === c.id;
  }
}
