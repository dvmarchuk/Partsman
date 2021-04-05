import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as data from './auth.json';



@Injectable({
  providedIn: 'root'
})
export class PartsTechAPIService {
  private posts: Observable<any>;


  constructor(private http: HttpClient) { }



  url = ('https://api.partstech.com/oauth/access');

  // @ts-ignore
  // options: {
  //   headers: 'id': (dmarchuk), 'key': (1be7bc0967eb478b8fa3ea350cdf0b44)
  // };

  // "credentials": {
  //   "user": {
  //     "id": "dmarchuk",
  //     "key": "1be7bc0967eb478b8fa3ea350cdf0b44"
  //   }
  // }
  // tslint:disable-next-line:typedef

  getAPI() {
    const headers = new HttpHeaders();
    this.http.post(this.url, {headers}).subscribe();

  }

  // Authorization: Bearer <accessToken>
}
