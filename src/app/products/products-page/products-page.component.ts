import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  choosedCategory: Category;
  products: Product[];
  categories: Category[];

  constructor(
    private productService: ProductsService,
    public dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {}

  categorySelected(category: Category) {
    this.choosedCategory = category;
  }

  isSelected(c: Category): boolean {
    return this.choosedCategory.id === c.id;
  }

  openDialog(product: Product) {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      data: product
    });

    dialogRef.afterClosed().subscribe(ans => {
      if (ans) {
        //add success popup
        this.cd.detectChanges();
      }
    });
  }

  ngOnInit(): void {
    this.products = this.productService.allProducts;
    this.categories = this.productService.allCategories;
    this.choosedCategory = { id: '0', title: 'all' };
  }
}
