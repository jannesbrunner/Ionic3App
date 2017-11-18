import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  baseURL: string;
  user: string;
  pw: string;
  



  constructor(private http: Http) { 
    this.baseURL = "https://dcinema.berlinale.de/api/v2/";


    

    
  }



  getCurrentTime() {

    let headers = new Headers({'Content-Type': 'application/json'});  
    headers.append('x-fms-auth-username', 'test');
    headers.append('x-fms-auth-password', 'test');
    let options = new RequestOptions({headers: headers});
    console.log(this.baseURL + "playback/locations")
    
    return this.http.get(this.baseURL + "/api/v2/playback/events/5878c30168c49326e7f6e35a", options)
      .map( 
        res => { res.json() },
       
      ).catch(this._errorHandler);
  }

  postJSON() {

  }

  _errorHandler(error: Response) {
    console.log("Der Status ist:" + error.status);
    return Observable.throw(error)
  }

}
