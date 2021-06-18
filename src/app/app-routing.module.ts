import { CitiesComponent } from './cities/cities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CityDetailComponent},
  { path: 'cities', component: CitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
