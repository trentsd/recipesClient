import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommentEditComponent } from './comment-edit/comment-edit.component';

@NgModule({
  declarations: [CommentsComponent, CommentEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [ CommentsComponent ]
})
export class CommentsModule { }
