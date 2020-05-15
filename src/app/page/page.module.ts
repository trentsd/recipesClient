import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { SharedModule } from '../shared/shared.module';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    CommentsModule
  ],
  exports: [ PageComponent ]
})
export class PageModule { }
