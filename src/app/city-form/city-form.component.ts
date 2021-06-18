import { Component } from '@angular/core';
import { Town } from '../interfases/city';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent {

  population = ['1 000 000 ', '700 000',
    '1 500 000', '500 000'];

  model = new Town(18, 'Dublin', this.population[0], 'Chuck Overstreet');
  submitted = false;


  onSubmit() {
    this.submitted = true;
  }

  newTown() {
    this.model = new Town(42, '', '');
  }

}
