import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidlistComponent } from './covidlist/covidlist.component';

const routes: Routes = [
  {
    path: '',
    component: CovidlistComponent
  },
  {
    path: 'covidlist',
    component: CovidlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
