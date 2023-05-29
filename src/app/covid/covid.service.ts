import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private _baseUrl = `${environment.baseUrl}`;


  constructor(private http: HttpClient, private router: Router) { }

/*
  listCases(){
    return this.http.get(`${this._baseUrl}/cases?country=hungary`);
  }
*/

getCasesByCountry(selectedCountry: string): Observable<any>{
  return this.http.get<any[]>(`${this._baseUrl}/cases?country=${selectedCountry}`);
}

  
  

}
