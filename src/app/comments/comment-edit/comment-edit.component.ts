import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {

  pageId: number;
  commentId: number;

  comment: any = {};


  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pageId = +params.get("pageid");
      this.commentId = +params.get("id");
      if (this.commentId) {
        this.dataService.getSpecificComment(this.commentId).subscribe((comment: any) => {
          if (comment) {
            this.comment = comment;
            this.comment.href = comment._links.self.href;
          } else {
            console.log(`Comment with id '${this.commentId}' not found`);
            this.goToPage();
          }
        });
      }
    });
  }

  goToPage() {
    this.router.navigate([`/page/${this.pageId}`]);
  }

  saveComment(form: NgForm) {
    this.dataService.saveComment(form).subscribe(result => {
      this.goToPage();
    }, error => console.error(error));
  }

  removeComment(href) {
    this.dataService.removeComment(href).subscribe(result => {
      this.goToPage();
    }, error => console.error(error));
  }

}
