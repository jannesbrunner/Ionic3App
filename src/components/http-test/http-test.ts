import { Component } from '@angular/core';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Headers } from '@angular/http/src/headers';

/**
 * Generated class for the HttpTestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'http-test',
  templateUrl: 'http-test.html',
  providers: [HttpServiceProvider]

})
export class HttpTestComponent {

  getData: string;
  postData: string;
  headers: Headers;
  


 constructor(private apiService: HttpServiceProvider) {
    console.log('Hello HttpTestComponent Component');
    
   


  }

  onTestGet() {
    this.apiService.getCurrentTime().subscribe(
      data => this.getData = JSON.stringify(data),
      error => this.getData = error,
      () => console.log("Finished request!") 
    );
  }

  onTestPost() {

  }



}
