import { Category } from './../models/category.model';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { observable, autorun, computed, action } from 'mobx';
import _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly apiUrl = 'backend/api';
  @observable private products: Product[];
  @observable private categories: Category[];
  constructor(private http: HttpClient) {
    this.http
      .get<Product[]>(this.apiUrl + '/products')
      .pipe(take(1))
      .subscribe(products => {
        this.products = products;
      });

    this.http
      .get<Category[]>(this.apiUrl + '/categories')
      .pipe(take(1))
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  @computed get allProducts(): Product[] {
    return this.products;
  }

  @computed get allCategories(): Category[] {
    return this.categories;
  }

  @action addProduct(product: Product): void {
    this.products.push({ ...product, id: _.uniqueId() });
  }
  @action updateProduct(uProduct: Product): void {
    const index = this.products.findIndex(prod => prod.id === uProduct.id);
    Object.assign(this.products[index], uProduct);
  }
}
