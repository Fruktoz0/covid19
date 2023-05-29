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

  params: { key: string, value: any }[] = [];

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
      this.params = Object.entries(response).map(([key, value]) => ({ key, value }));
    
    });
  }
  }

  onCountryChanged(country: string){
    this.selectedCountry = country;
    this.fetchData();
  }

  getSelectedParamValue(): any {
    if (this.selectedParam) {
      const param = this.params.find(item => item.key === this.selectedParam);
      return param ? param.value : '';
    } else {
      return this.params.map(item => `${item.key}: ${item.value}`).join(', ');
    }
  }
 
}


