import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IPage, IComment } from '../shared/interfaces'

//Simply fetches data from a static json. This must be updated when switching to a RESTful service
@Injectable()
export class DataService {

  //
  public API = '//localhost:8080';
  public COMMENTS_API = this.API + '/comments';

  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getPages() : Observable<IPage[]> {
    return this.http.get<IPage[]>(this.baseUrl + 'pages.json')
          .pipe(catchError(this.handleError)
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

  getAllComments(): Observable<any> {
    return this.http.get(this.API + this.COMMENTS_API);
  }

  getCommentsForThisPage(id: number) : Observable<any> {
    return this.http.get(this.API + '/page/' + id.toString());
  }

  // saveComment(comment: any): Observable<any> {
  //   let result: Observable<any>;
  //   if (comment['href']) {
  //     result = this.http.put(comment.href, comment);
  //   } else {
  //     result = this.http.post()
  //   }
  // }

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
