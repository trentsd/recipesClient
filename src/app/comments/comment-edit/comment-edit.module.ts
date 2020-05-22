import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommentEditComponent } from './comment-edit.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [CommentEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [ CommentEditComponent ]
})
export class CommentEditModule { }
