import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpInterceptor, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as data from '../../auth.json';
// import {Headers} from 'angular2/http';



@Injectable({
  providedIn: 'root'
})
export class PartsTechAPIService {
  private posts: Observable<any>;
  private allVin: any;


  constructor(private http: HttpClient) { }



  url = 'https://api.partstech.com';


  // tslint:disable-next-line:typedef
  getAPI() {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    const payload = {
      accessType: 'user',
      credentials: {
      user: {
        id: 'demo_vaautosales',
          key: '1c82778be5a549229e5189ced4cc65d0'
      },
      partner: {
        id: 'vaautosales_beta',
          key: '0389ba8a09314b9d964498bfba63a016'
      }}};

    this.http.post(this.url + '/oauth/access', JSON.stringify(payload), {headers}).subscribe();
    console.log(headers);
  }

  // tslint:disable-next-line:typedef
    getApi2(){
      console.log('getApi2');

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

