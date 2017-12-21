import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';


@Injectable()
export class ProductService {

  constructor(private messageService:MessageService) { }

  getProducts1() : Product[] {
    return PRODUCTS;
  }

  getProducts():Observable<Product[]> {
    //this.messageService.add('ProductService: fetched heroes');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
  // Todo: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(PRODUCTS.find(product => product.id === id));
}


 deleteProduct(prodid){
        alert("service prod id:"+prodid);
 
       for(var i =0; i<PRODUCTS.length; i++) {
         var _product = PRODUCTS[i];
         if(_product.id == prodid){
            PRODUCTS.splice(i, 1);
            break;
         }
       }
       
        
  }


}
