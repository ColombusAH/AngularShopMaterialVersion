import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent implements OnInit {
  @Input() product: Product;
  
  constructor() {}

  ngOnInit() {}
}
