import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCountry from './country.reducer';

// Lookup the 'Country' feature state managed by NgRx
const getCountryState = createFeatureSelector<fromCountry.State>(
  fromCountry.countryFeatureKey
);

export const selectCountryList = createSelector(
  getCountryState,
  state => state.countries
);

export const selectCountryError = createSelector(
  getCountryState,
  state => state.error
);

export const selectCountryListIsLoading = createSelector(
  getCountryState,
  state => state.isLoading
);

export const selectCountryViewModel = createSelector(
  selectCountryList,
  selectCountryError,
  selectCountryListIsLoading,
  (countries, error, loading) => ({
    countries,
    error,
    loading
  })
);
