import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private COUNTRY_API_URL = 'https://restcountries.eu/rest/v2/region';
  constructor(private http: HttpClient) {}

  getCountries(region: string):  Observable<Country[]> {
    return this.http
      .get<any>(`${this.COUNTRY_API_URL}/${region}`);
  }
}
