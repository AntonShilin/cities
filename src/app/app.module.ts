import { CityDetailComponent } from './city-detail/city-detail.component';
import { CitiesComponent } from './cities/cities.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityFormComponent } from './city-form/city-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CityFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
