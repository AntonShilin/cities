import { HeroService } from './../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfases/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: IHero[] = [];
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.heroService.getDataFromFirestore()!.subscribe(arr => {
      this.heroes = arr;
      console.log(arr)
    })
  }

}
