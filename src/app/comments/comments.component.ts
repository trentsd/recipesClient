import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IComment } from '../shared/interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllComments().subscribe(data => {
      this.comments = data;
    });
  }

}
