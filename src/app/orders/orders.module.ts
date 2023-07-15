// below, decorator: gives metadata
import { NgModule } from '@angular/core';


// below, directives - CRITICAL
import { CommonModule } from '@angular/common';

// importing the shared module here will make it available to the whole app
import { SharedModule } from '../shared/shared.modules';

import { AppRoutingModule } from '../app-routing.module';

// loading the script tag of the matching component
import { OrdersComponent } from './orders.component'
//loading child components


// decorator
@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    AppRoutingModule,

  ],
  exports: [ OrdersComponent ],
  providers: [],

})
export class OrdersModule { }

// and now we link it to the root bucket: App Module
