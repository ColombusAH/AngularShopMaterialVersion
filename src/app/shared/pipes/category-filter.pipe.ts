import { Category } from 'src/app/core/models/category.model';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {
  transform(products: Product[], category: Category): Product[] {
    if (products && category) {
      return products.filter(
        product =>
          category.title.toLowerCase() === 'all' ||
          product.categoryId === category.id
      );
    }
    return products;
  }
}
