import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IPage } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/core/data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  pages: IPage[];
  // @Input() _pages: IPage[];

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {

    this.dataService.getPages()
    .subscribe((dataPages: IPage[]) => this.options = dataPages.map(page => page.pageName));

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  goToPage() {

  }

}
