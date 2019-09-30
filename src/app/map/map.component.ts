import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  title = 'map';
  latitude = 18.561279446039663;
  longitude = 73.76290440559387;
  locationChosen = false;

  onchoseLocation(event) {
  console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
