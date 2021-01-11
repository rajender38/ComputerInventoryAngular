import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable()
export class HttpWrapper {
  protected headers: Headers;
  constructor(private _http: HttpClient) {

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  get(baseUrl: string, options?: any): Observable<any> {
    return this._http
      .get<any>(baseUrl, options)
      .pipe(
        catchError(this.handleError)
      )
  }

  put(url: string, data: any, args?: any): Observable<any> {
    if (args == null) { args = {}; }
    if (args.headers === undefined) { args.headers = new HttpHeaders({
      'Content-Type':  'application/json'    }) }
    debugger
    return this._http
      .put(url, JSON.stringify(data), args)
      .pipe(
        catchError(this.handleError)
      )

  }

  patch(url: string, data: any, args?: any): Observable<any> {
    if (args == null) { args = {}; }
    if (args.headers === undefined) { args.headers = new HttpHeaders({
      'Content-Type':  'application/json'    }) }

    return this._http
      .patch(url, JSON.stringify(data), args)
      .pipe(
        catchError(this.handleError)
      )
  }

  delete(url: string, options?: any): Observable<any> {
    if (options == null) { options = {}; }
    if (options.headers === undefined) { options.headers = new HttpHeaders({
      'Content-Type':  'application/json'    }) }

    return this._http
      .delete(url, options)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }
}