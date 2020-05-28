import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav.component';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
  ],
  exports: [ MainNavComponent ]
})
export class MainNavModule { }
