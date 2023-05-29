import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CovidRoutingModule } from './covid-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CovidlistComponent } from './covidlist/covidlist.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CovidlistComponent
  ],
  imports: [
    CommonModule,
    CovidRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  
  ],
  exports: [
    CovidlistComponent
  ]
})
export class CovidModule { }
