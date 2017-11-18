import { Component } from '@angular/core';

/**
 * Generated class for the HttpTestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'http-test',
  templateUrl: 'http-test.html'
})
export class HttpTestComponent {

  getData: string;
  postData: string;


 constructor() {
    console.log('Hello HttpTestComponent Component');
    
  }



}
