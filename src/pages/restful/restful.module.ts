import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestfulPage } from './restful';

@NgModule({
  declarations: [
    RestfulPage,
  ],
  imports: [
    IonicPageModule.forChild(RestfulPage),
  ],
})
export class RestfulPageModule {}
