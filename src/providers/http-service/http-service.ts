import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  baseURL: string;

  constructor(private http: Http) { 
    this.baseURL = "";
  }

  getCurrentTime() {
    return this.http.get(" http://date.jsontest.com")
      .map(res => res.json());
  }

  postJSON() {

  }

}
