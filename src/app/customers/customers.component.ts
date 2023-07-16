import { Component, OnInit } from "@angular/core";
import { ICustomer } from "../shared/interfaces";
import { DataService } from "../core/data.service";

@Component ({
   selector: 'app-customers',
   templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
    title: string = '';
    // now anything I add to people, has to match the rules of the interfaces
    people: ICustomer[] = []
    isVisible: boolean = true;
    changevisibility(){
        this.isVisible = !this.isVisible
    }
    
    // that's how we can use the data http fetch created in the service, "registered" all the way up in the app module and now injected in the constructor
    constructor (private dataService: DataService) {
    }

    ngOnInit(): void {
        console.log('********************************CustomersComponent ngOnInit called');

        this.title = 'Customers';
        this.dataService.getCustomers().subscribe((customers: ICustomer[]) => this.people = customers)
    }

}