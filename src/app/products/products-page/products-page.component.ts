import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  choosedCategory: Category;
  products: Product[];
  allProducts: Product[];
  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) {
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

  openDialog(product: Product) {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {data: product});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
