import { IHero } from './../interfases/hero';

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];

  constructor( private heroService: HeroService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.heroService.getDataFromFirestore()!.subscribe(arr => {
      this.heroes = arr
    })
  }



}
