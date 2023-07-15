import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from "../core/data.service";
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component ({
   selector: 'app-orders',
   templateUrl: './orders.component.html',
})

export class OrdersComponent implements OnInit {
    
    orders: IOrder[] = [];
    customer!: ICustomer;

    // that's how we can use the data http fetch created in the service, "registered" all the way up in the app module and now injected in the constructor
    constructor (private dataService: DataService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {

        let id = +this.route.snapshot.paramMap.get('id')
        if (id !== null) {
            const numericId = +id;
            this.dataService.getOrders(numericId).subscribe((orders: IOrder[]) => {
              this.orders = orders;
            });
          }

        this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
            this.customer = customer
        })
    }

}