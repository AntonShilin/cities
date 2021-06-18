import { CityService } from './../services/city.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ICity } from '../interfases/city';


@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {

  city: ICity | undefined;

  constructor(private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCityById();
  }

  getCityById(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.cityService.getElemById(id).subscribe(hero => this.city = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
