import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SalvarContatoComponent} from './contato/salvar-contato/salvar-contato.component';
import { ListarContatoComponent} from './contato/listar-contato/listar-contato.component';

import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [AppComponent , SalvarContatoComponent, ListarContatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,AngularFireDatabaseModule, AngularFireModule.initializeApp({
    
      apiKey: "AIzaSyAj-jfTPeg0RaTYtdYZ79uT3vZcvOxovEc",
        authDomain: "teste-261a4.firebaseapp.com",
        databaseURL: "https://teste-261a4.firebaseio.com",
        projectId: "teste-261a4",
        storageBucket: "teste-261a4.appspot.com",
        messagingSenderId: "1043065401237",
        appId: "1:1043065401237:web:129f71a41fb679dc"


  })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
