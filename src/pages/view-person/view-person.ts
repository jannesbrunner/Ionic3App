import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/Person';
import { PersonProvider } from '../../providers/person/person';

/**
 * Generated class for the ViewPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-person',
  templateUrl: 'view-person.html',
})
export class ViewPersonPage {

  item: Person = {
    firstName: 'Jay',
    lastName: 'Brunner'
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private pp: PersonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPersonPage');
  }

  edit() {
    this.navCtrl.push('EditPersonPage', {
      item: this.item
    });
  }

  ionViewDidEnter() {
    const newdata = this.pp.get() as Person;
    if(newdata !== null) {
      this.item = newdata;
    }
  }

}
