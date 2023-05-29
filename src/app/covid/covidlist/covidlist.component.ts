import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-covidlist',
  templateUrl: './covidlist.component.html',
  styleUrls: ['./covidlist.component.scss']
})
export class CovidlistComponent implements OnInit {
  cases: any[] = []
  countries: string[] = [];
  selectedCountry?: string;
  data: any[] = [];

  params: string[] = [];
  selectedParam?: string;
 


  constructor(private covid: CovidService) { }

  ngOnInit() {
    this.fetchData();
  }

  /*
  listCases() {
    this.covid.listCases().subscribe(res => {
      this.cases = [res];
    }); 
  }
*/


fetchData() {
  if (this.selectedCountry) {
    this.covid.getCasesByCountry(this.selectedCountry).subscribe(response => {
      this.data = [response];
    });
  }
  }

  onCountryChanged(country: string){
    this.selectedCountry = country;
  }

  

 
}


