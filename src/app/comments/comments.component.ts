import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IComment } from '../shared/interfaces';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  pageId: number;

  comments: Array<any>;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pageId = +params.get("id");

      this.dataService.getCommentsForThisPage(this.pageId).subscribe(dataFromServer => {
        this.comments = dataFromServer;
      });
    });
  }

}
