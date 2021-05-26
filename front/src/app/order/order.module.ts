import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order, OrderService} from './order.service';
import {from} from 'rxjs';


// export interface Order {
//   completed: boolean;
//   status?: string;
//   quantity: number;
//   price: number;
//   id?: number;
//   isChecked?: boolean;
//   idProduct?: number;
//
// }

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})



export class OrderComponent implements OnInit {
  orders: Order[] = [];
  orderQuantity = 0;




  constructor(private orderService: OrderService, private http: HttpClient) {
  }


  addProduct(){
    const newOrder: Order = {
      quantity: this.orderQuantity,
      completed: false,
    }
    this.http.post<Order>('http://localhost:8080/order', newOrder)
      .subscribe( order => {
        console.log('order', order );
        this.orders.push(order);

      })
  }

  ngOnInit() {
  }
}
