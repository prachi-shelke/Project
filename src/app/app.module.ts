import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule

// ...

NgModule({
  declarations: [/* ... */],
  imports: [
    BrowserModule,
    AppRoutingModule // Add the AppRoutingModule
  ],
  bootstrap: [/* ... */]
})

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './map/map.component';
import { ProfileDetailComponent } from './profile-detail/profile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MapComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
