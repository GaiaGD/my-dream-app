import { Component, OnInit, Input } from "@angular/core";
import { ICustomer } from "src/app/shared/interfaces";

@Component ({
   selector: 'app-customers-list',
   templateUrl: './customers-list.component.html'
})



export class CustomersListComponent implements OnInit {

    private _customers: ICustomer[] = []

    @Input() get customers(): ICustomer[]{
        return this._customers;
    }

    set customers(value: ICustomer[]){
        if(value){
            this.filteredCustomers = this._customers = value
            this.calculateOrders()
        }
    }

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number = 0;
    currencyCode: string = 'USD'
    cust: object = {}
    constructor () {
    }

    ngOnInit(): void {
    }

    // this receives the filter input in the filter-textbox.component and gives back on the matching users from the users list
    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                (cust.orderTotal?.toString().indexOf(data) ?? -1) > -1
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            if(cust.orderTotal !== undefined){
                this.customersOrderTotal += cust.orderTotal;
            }
        });
    }

    sort(prop: string){
        console.log(prop)
        // a sorter service will handle the sorting
    }

}