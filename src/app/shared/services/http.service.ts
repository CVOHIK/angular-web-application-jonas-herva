import { Injectable } from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions: { headers; observe; } = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response'
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url): Observable<HttpResponse<any>> {
    return this.http.get(url, httpOptions).pipe(
      tap(res => console.log(res)),
      map((res: HttpResponse<any>) => res.body)
    );
  }
}
