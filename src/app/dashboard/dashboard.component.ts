import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products:Product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void {
    //this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(products123 => this.products = products123);
  }

}
