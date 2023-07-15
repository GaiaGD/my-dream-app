// used to inject dependencies in the constructor
import { Injectable } from '@angular/core';

// helps do get, post, put ... restful service
import { HttpClient } from '@angular/common/http';

// rxjs helps with async
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

// for best practice, always use @Injectable() in a service

@Injectable()

export class DataService {

    // this is just our local server
    baseUrl: string = 'assets/';

    // we need to get customers and orders
    
    constructor(private http: HttpClient) { }

    // an observable helps to start an operation and then subscribe: like when you subscribe to a newsletter, then you wait, then you receive it, then you can unsubscribe.
    // so this helps handling data that is asyncronous, while we wait to receive it
    // it's similar to a promise
    getCustomers() : Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl+'customers.json')
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                // handle error function is at the bottom
                catchError(this.handleError)

            )
    }
        
    getCustomer(id: number): Observable<ICustomer> {
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
        .pipe(
          map(customers => {
            const customer = customers.find((cust: ICustomer) => cust.id === id);
            if (customer) {
              return customer;
            } else {
              throw new Error('Customer not found');
            }
          }),
          catchError(this.handleError)
        );
      }
  
      getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
          .pipe(
            // maps through the array and finds the matching onw through the id
            map(orders => {
              let custOrders = orders.filter((order: IOrder) => order.customerId === id);
              return custOrders;
            }),
            catchError(this.handleError)
          );
      }

      private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(errMessage);
        }
        return throwError(error || 'Node.js server error');
      }

}