import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IPage } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/core/data.service';

import { Router } from '@angular/router';

/**
 * Very similar to the "Setting separate control and display values" example
 * of the mat-autocomplete documentation at
 * https://material.angular.io/components/autocomplete/examples
 */
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl(); //Necessary for autocomplete functionality

  options: IPage[] = []; //Holds all pages retrieved via DataService
  filteredOptions: Observable<IPage[]>; //Holds page objects that have been filtered via _filter() method

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {

    //Subscribe to pages via DataService
    this.dataService.getPages()
      .subscribe((dataPages: IPage[]) => this.options = dataPages);

    /**Uses the myControl object and reactive forms to keep track of changes to the search bar text field
     * and apply the _filter to it, updating the filteredOptions
     */
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

  }

  /**
   * Returns a filtered version of the options list, filtered by their name field
   * @param name recieved from the text field being tracked via ReactiveForms
   */
  private _filter(name: string): IPage[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.pageName.toLowerCase().includes(filterValue));
  }

  /**
   * Recieves the full page object from the DOM via the [displayWith] directive
   * Returns just the pageName: string field so it can be displayed by the autocomplete material
   * @param page full page object recieved as the chosen option.value from the DOM
   */
  displayFn(page: IPage): string {
    return page && page.pageName ? page.pageName : '';
  }

  /**
   * Recieves the full page object from the DOM via the (optionSelected) mat-autocomplete method
   * Ueses router to grab page id from page object and append the URL
   * @param page
   */
  goToPage(page: IPage) {
    if (page) { //Ensure a page has been passed
      this.router.navigate([`/page/${page.id}`]);
    }
  }

}
