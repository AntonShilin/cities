import { CityService } from './../services/city.service';
import { ICity } from './../interfases/city';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: ICity[] = [];

  constructor( private cityService: CityService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.cityService.getDataFromFirestore()!.subscribe(arr => {
      this.cities = arr
    })
  }



}
