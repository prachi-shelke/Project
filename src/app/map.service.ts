import { Injectable } from '@angular/core';

declare const google: any; // Declare the 'google' object from the API

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map: any;

  constructor() {}

  // Initialize the map and add a marker
  initMap(mapElement: HTMLElement, latitude: number, longitude: number): void {
    const mapOptions = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(mapElement, mapOptions);

    new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: this.map,
      title: 'Profile Location'
    });
  }
}