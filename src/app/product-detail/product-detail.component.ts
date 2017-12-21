import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product:Product;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private productService:ProductService) { }

  ngOnInit() {
      this.getProduct();
  }

  getProduct(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.productService.getProduct(id)
    .subscribe(product => this.product =product);
  }

  goBack(): void {
      this.location.back();
  }

  deleteProduct(prodid): void {
    this.productService.deleteProduct(prodid);
    this.location.back();

  }

}
