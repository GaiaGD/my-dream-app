import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// this tells what bucket will be loaded first
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
