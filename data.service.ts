import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Detail } from './detail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
  public data: any;
  private heroesUrl = 'api/heroes';  // URL to web api

  // private baseUrl = 'http://localhost:52369/api/Values/GetSelectedEmployees';
  private baseUrl = 'http://localhost:52369/api/Values/';
  constructor(private http: HttpClient) { }

  messages: Array<string> = new Array<string>();

  addUser (data): Observable<Detail> {
    const url = this.baseUrl+'Post';
    return this.http.post<Detail>(url, data, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((data: Detail) => this.log(`added hero`)),
      catchError(this.handleError<Detail>('addHero'))
    );
  }

  modifyUser (data): Observable<Detail> {
    const url = this.baseUrl+'EditDetail/'+data.emailId;
    return this.http.post<Detail>(url, data, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((data: Detail) => this.log(`added hero`)),
      catchError(this.handleError<Detail>('addHero'))
    );
  }

  getUser(data): Observable<Detail> {
    const url = this.baseUrl + 'GetSelectedEmployees/' + data.emailId;
    return this.http.get<Detail>(url).pipe(
      tap(_ => this.log('found hero match')),
      catchError(this.handleError<Detail>('searchDetail'))
     );
  }

  getAllUsers(): Observable<Detail[]> {
    const url = this.baseUrl+'GetAllEmployees';
    return this.http.get<Detail[]>(url).pipe(
      tap(_ => this.log('found hero match')),
      catchError(this.handleError<Detail[]>('searchDetail'))
     );
  }

  deleteUser(data) {
    const url = this.baseUrl+'Delete/'+data.emailId;
    return this.http.delete(url).pipe(
      tap(_ => this.log('found hero match')),
      catchError(this.handleError<Detail>('searchDetail'))
     );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messages.push(message);
  }
}
