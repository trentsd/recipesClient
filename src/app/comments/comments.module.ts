import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ CommentsComponent ]
})
export class CommentsModule { }