import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product, ProductService} from './catalog.service';
import {from} from "rxjs";
// import { MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit{

    state: boolean = false;


  constructor(private productService: ProductService) {}

  products: Product[] = [];
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
     this.state = event.target.checked;
     console.log(this.state);
  }
  SendPr(){
    if ( this.state == true) {
       const all = this.products;
      console.log('id', all);
    }


}


}

