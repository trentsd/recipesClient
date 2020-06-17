import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//aws-amplify installed via npm
import Amplify, { API } from 'aws-amplify';

//Manually configured AWS Resource configuration. Auth can be added here later
Amplify.configure({
  API: {
    endpoints: [
      {
        name: "recipeserverprod",
        endpoint: "http://recipeserverprod-env.eba-aegpxm7g.us-east-2.elasticbeanstalk.com/"
      }
    ]
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
