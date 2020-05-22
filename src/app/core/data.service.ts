import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IPage, IComment } from '../shared/interfaces'

//Pages are fetched from a static JSON in assets folder because they do not change
//Comments are fetched from RESTful calls to server provided by Spring Boot
@Injectable()
export class DataService {

  //THESE VALUES WILL CHANGE WHEN DEPLOYED TO HEROKU
  public API = '//localhost:8080';
  public COMMENTS_API = this.API + '/comments';

  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getPages() : Observable<IPage[]> {
    return this.http.get<IPage[]>(this.baseUrl + 'pages.json')
          .pipe(catchError(this.handleError)
        );
    }

  getPage(pageId: number) : Observable<IPage> {
    return this.http.get<IPage[]>(this.baseUrl + 'pages.json')
      .pipe(
        map(pages => {
          let page = pages.filter((ipage: IPage) => ipage.id === pageId);
          return (page && page.length) ? page[0] : null;
        }),
        catchError(this.handleError)
      )
  }

  getAllComments(): Observable<any> {
    return this.http.get(this.COMMENTS_API);
  }

  getCommentsForThisPage(pageId: number) : Observable<any> {
    return this.http.get(this.API + '/page/' + pageId.toString());
  }

  getSpecificComment(commentId: number) : Observable<any> {
    return this.http.get(this.COMMENTS_API + '/' + commentId);
      // .pipe(
      //   map(comments => {
      //     let comment = comments.filter((icomment: IComment) => icomment.id === commentId);
      //     return (comment && comment.length) ? comment[0] : null;
      //   }),
      //   catchError(this.handleError)
      // )
  }

  saveComment(comment: any): Observable<any> {
    let result: Observable<any>;
    if (comment['href']) {
      result = this.http.put(comment.href, comment);
    } else {
      result = this.http.post(this.COMMENTS_API, comment);
    }
    return result;
  }

  removeComment(href: string) {
    return this.http.delete(href);
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
