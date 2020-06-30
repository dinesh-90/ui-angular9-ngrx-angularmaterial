import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { Region, Country } from './models';
import { RegionUIActions, selectRegionViewModel } from './state/region';
import { CountryUIActions, selectCountryViewModel } from './state/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countryViewModel$ = this.store.select(selectCountryViewModel);
  regionViewModel$ = this.store.select(selectRegionViewModel);

  public country;
  public selectedCountry;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.loadRegionsRequested();
  }

  loadCountriesRequested(region: Region) {
    this.store.dispatch(CountryUIActions.loadCountriesRequested({ region: region.name }));
  }

  loadCountriesDetailsRequested(country: Country) {
    console.log('kjdhfgkjsdhgkfsgh', country);
    this.selectedCountry = country;
  }

  load() {
    this.country = this.selectedCountry;
  }

  loadRegionsRequested() {
    this.store.dispatch(RegionUIActions.loadRegionsRequested({}));
  }
}
