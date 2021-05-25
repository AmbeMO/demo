import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../catalog/catalog.service";
import {HttpClient} from "@angular/common/http";
import {from} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productName = '';
  productCategory = '';
  productPrice = '';
  products: Product[] = [];
  loading = false;

  constructor(private productService: ProductService, private http: HttpClient) { }

  addProduct(){
    if (!this.productName.trim() && !this.productPrice.trim() && !this.productCategory.trim()){
      return;
    }
    const newProduct: Product = {
      name: this.productName,
      completed: false,
      price: this.productPrice,
      category: this.productCategory,
      isChecked: false
    }
    this.http.post<Product>('http://localhost:8080/product', newProduct)
      .subscribe( product => {
        console.log('product', product );
        this.products.push(product);
        this.productName = '';
        this.productPrice = '';
        this.productCategory = '';
      })
  }
  ngOnInit(){


  }


}
