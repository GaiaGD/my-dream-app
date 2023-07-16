// below, decorator: gives metadata
import { NgModule } from '@angular/core';
// below, directives - CRITICAL
import { BrowserModule } from '@angular/platform-browser';

// importing the Customer Bucket here
import { CustomersModule } from './customers/customers.modules';
// importing the Orders Bucket here
import { OrdersModule } from './orders/orders.module';

// import the services to be shared
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

// loading the script tag of the initial component
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.modules';


// decorator
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  // below it declares the first one that will display in the UI, the startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
