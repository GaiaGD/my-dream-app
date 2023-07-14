// below, decorator: gives metadata
import { NgModule } from '@angular/core';
// below, directives - CRITICAL
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

// loading the script tag of the matching component
import { CustomersComponent } from './customers.component';
//loading child components
import { CustomersListComponent } from './customers-list/customers-list.component';

// decorator
@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ CustomersComponent ],
  providers: [],

})
export class CustomersModule { }

// and now we link it to the root bucket: App Module
