import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonProvider {

  private data: any = null;

  constructor() {
    console.log('Hello PersonProvider Provider');

    }

    get() {
      let data = this.data;
      this.data = null;
      return data;
    }

    post(item: any, navCtrl: NavController) {
        this.data = item;
        navCtrl.pop();
    }

    

}
