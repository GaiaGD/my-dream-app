// below, decorator: gives metadata
import { NgModule } from '@angular/core';

// importing this so I can use the filter
import { FormsModule } from '@angular/forms';

// below, directives - CRITICAL
import { CommonModule } from '@angular/common';

// importing the shared module here will make it available to the whole app
import { SharedModule } from '../shared/shared.modules';

import { AppRoutingModule } from '../app-routing.module';

// loading the script tag of the matching component
import { CustomersComponent } from './customers.component';
//loading child components
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';


// decorator
@NgModule({
  declarations: [
    CustomersComponent,
    FilterTextboxComponent,
    CustomersListComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [ CustomersComponent ],
  providers: [],

})
export class CustomersModule { }

// and now we link it to the root bucket: App Module
