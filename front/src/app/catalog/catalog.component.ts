import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product, ProductService, Supplier, SupplierService} from './catalog.service';
// import { MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit{
  products: Product[] = [];
  // suppliers: Supplier[] = [];
  error = '';
  searchStr = '';
  loading = false;



  constructor(private productService: ProductService) {}
  // private supplierService: SupplierService



  ngOnInit() {
    this.fetchProducts();
    // this.fetchSuppliers();
  }

  fetchProducts() {
    this.loading = true;
    this.productService.fetchProducts()
    .subscribe(products => {
      this.products = products;
      this.loading = false;
  }, error => {
      this.error = error.message; // ouput error
    });

}
  // fetchSuppliers() {
  //   this.loading = true;
  //   this.supplierService.fetchSuppliers()
  //     .subscribe(suppliers => {
  //       this.suppliers = suppliers;
  //       this.loading = false;
  //     }, error => {
  //       this.error = error.message; // ouput error
  //     });
  // }



    onCreate(){


  }
}
