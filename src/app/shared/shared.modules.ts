// below, decorator: gives metadata
import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';

// below, directives - CRITICAL
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
// loading the script tag of the matching component



// decorator
@NgModule({
  declarations: [ CapitalizePipe ],
  imports: [ ],
  // exporting it, it's accessible to the whole app
  exports: [ CapitalizePipe ],
  providers: [],

})
export class SharedModule { }

// and now we link it to the root bucket: App Module
