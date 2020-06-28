import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { EnsureHttpsInterceptor } from './http-interceptors/ensure-https-interceptor';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [
      DataService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: EnsureHttpsInterceptor,
        multi: true
      }
    ]
})
export class CoreModule { }
