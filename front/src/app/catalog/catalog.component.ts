import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product, ProductService} from './catalog.service';
import {from} from "rxjs";
// import { MatDialog, MatDialogConfig} from "@angular/material";
import Swal from 'sweetalert2';



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit{

    state: boolean = false;


  constructor(private productService: ProductService, private http: HttpClient) {}

  products: Product[] = [];
  productName = '';
  productCategory = '';
  productPrice = '';
  cart: Product[] = [];
  error = '';
  searchStr = '';
  loading = false;

// let state = false;




  ngOnInit(){
    this.fetchProducts();

  }

  fetchProducts(){
    this.loading = true;
    this.productService.fetchProducts()
    .subscribe(products => {
      this.products = products;
      this.loading = false;
  }, error => {
      this.error = error.message; // ouput error
    });

}

  addToggle(event){
     this.products = this.products.map(product => {
       console.log(product.id, event.target.id)
       if (product.id == event.target.id) {
         console.log(event.target.checked)
         return {
           ...product,
           isChecked: event.target.checked,
         };
       }
       return product
     });

  }
  SendPr(){
        console.log(this.products);

}
  // modalOrder(){
  //   Swal.fire({
  //     title: 'Order!',
  //     text: 'Do you want to add more products',
  //     icon: 'question',
  //     showCancelButton: true,
  //     input: 'range',
  //     inputLabel: 'How much',
  //     inputValue: 1,
  //     confirmButtonText: 'Make order'}).then((result) => {
  //     if (result.isConfirmed) {
  //     Swal.fire(
  //       'Success!',
  //       'Your order has been send.',
  //       'success'
  //     )
  //   }
  //   });
  // }


  addProduct() {
    if(!this.productName.trim() && !this.productPrice.trim() && !this.productCategory.trim()){
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
      console.log('product', product )
      this.products.push(product)
      this.productName = ''
      this.productPrice = ''
      this.productCategory = ''
    })
  }
}

