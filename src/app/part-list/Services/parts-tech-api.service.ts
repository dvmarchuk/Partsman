import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpInterceptor, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as data from '../../auth.json';
//import {Headers} from 'angular2/http';



@Injectable({
  providedIn: 'root'
})
export class PartsTechAPIService {
  private posts: Observable<any>;


  constructor(private http: HttpClient) { }



  url = 'https://api.partstech.com/oauth/access';


  // tslint:disable-next-line:typedef
  getAPI() {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    const payload = {
      accessType: 'user',
      credentials: {
      user: {
        id: 'dmarchuk',
          key: '1be7bc0967eb478b8fa3ea350cdf0b44'
      },
      partner: {
        id: 'dmarchuk',
          key: 'myrbar-nocqYc-0hejce'
      }
    }};

    this.http.post(this.url, JSON.stringify(payload), {headers}).subscribe();

  }
}






// Authorization: Bearer <accessToken>


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

