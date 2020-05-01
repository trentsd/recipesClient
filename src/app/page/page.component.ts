import { Component, OnInit } from '@angular/core';

import { IPage } from '../shared/interfaces';

import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';

import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  title: string;

  id: number;

  page: IPage;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");

      this.dataService.getPage(this.id).subscribe((page: IPage) => {
        this.page = page;
      });
    });

  }

}
