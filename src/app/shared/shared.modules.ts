// below, decorator: gives metadata
import { NgModule } from '@angular/core';
// below, directives - CRITICAL
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
// loading the script tag of the matching component



// decorator
@NgModule({
  declarations: [ ],
  imports: [ ],
  exports: [ ],
  providers: [],

})
export class SharedModule { }

// and now we link it to the root bucket: App Module
