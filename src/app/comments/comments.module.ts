import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule
  ],
  exports: [ CommentsComponent ]
})
export class CommentsModule { }
