import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommentEditModule } from './comment-edit/comment-edit.module'

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    CommentEditModule
  ],
  exports: [ CommentsComponent ]
})
export class CommentsModule { }
