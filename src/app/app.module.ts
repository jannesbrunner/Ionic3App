import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http, Headers, URLSearchParams } from '@angular/http'


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ViewPersonPage } from '../pages/view-person/view-person';
import { EditPersonPage } from '../pages/edit-person/edit-person';
import { RestfulPage} from '../pages/restful/restful';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PersonProvider } from '../providers/person/person';

import { HttpTestComponent } from '../components/http-test/http-test'
import { HttpServiceProvider } from '../providers/http-service/http-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ViewPersonPage,
    RestfulPage,
    HttpTestComponent,
    
    
    
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
 
   
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ViewPersonPage,
    RestfulPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonProvider,
    HttpServiceProvider
  ]
})
export class AppModule {}
