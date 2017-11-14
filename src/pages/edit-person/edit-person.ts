import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonProvider } from '../../providers/person/person'

/**
 * Generated class for the EditPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-person',
  templateUrl: 'edit-person.html',
})
export class EditPersonPage {

  form: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private pp: PersonProvider, 
    private fb: FormBuilder) {
      this.form = fb.group({
        firstName: [''],
        lastName: ['']
      });

    const data = navParams.get('item');
    
    this.form.patchValue(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPersonPage');
  }

  save() {
    this.pp.post(this.form.value, this.navCtrl);
  }

}
