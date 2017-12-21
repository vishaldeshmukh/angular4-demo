import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  constructor(private productService:ProductService) { }
 
 //Angular calls ngOnInit shortly after creating a component.
 //It's a good place to put initialization logic.
  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts():void {
    //this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(products123 => this.products = products123);
 

}

 
   
}
