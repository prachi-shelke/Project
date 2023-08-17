import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: '<div id="map"></div>',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    // Implement map initialization logic here
  }
}
