import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IPage } from '../shared/interfaces'

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }

    getPages() : Observable<IPage[]> {
      return this.http.get<IPage[]>(this.baseUrl + 'pages.json')
        .pipe(
          catchError(this.handleError)
        );
    }

    getPage(id: number) : Observable<IPage> {
      return this.http.get<IPage[]>(this.baseUrl + 'pages.json')
        .pipe(
          map(pages => {
            let page = pages.filter((ipage: IPage) => ipage.id === id);
            return (page && page.length) ? page[0] : null;
          }),
          catchError(this.handleError)
        )
    }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
