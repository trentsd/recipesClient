import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IPage } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{

  pages: IPage[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private dataService: DataService,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.dataService.getPages()
      .subscribe((dataPages: IPage[]) => this.pages = dataPages);
  }

}
