import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, delay, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';


export interface Order {
  completed: boolean;
  quantity: number;
  id?: number;
  isChecked?: boolean;
  idProduct?: number;
}


@Injectable({providedIn: 'root'})


export class OrderService {

  constructor(private http: HttpClient) {
  }

}
