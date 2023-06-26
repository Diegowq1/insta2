import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'web-animations-js/web-animations.min.js';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
