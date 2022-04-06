import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  constructor() {
    // let map: google.maps.Map;
    // const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };
  }

  ngOnInit(): void {
    alert('in');
    const loader = new Loader({
      apiKey: 'AIzaSyD-RDQxxFPicLMCTWkVzVufGYz_Uld_9gA',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        }
      );
    });
  }
}
