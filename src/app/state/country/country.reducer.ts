import { Action, createReducer, on } from '@ngrx/store';
import { Country } from '../../models';
import * as CountryAPIActions from './api.actions';
import * as CountryUIActions from './ui.actions';

export interface State {
  countries: Country[];
  isLoading: boolean;
  error: string;
}

export const countryFeatureKey = 'country';

export const initialState: State = {
  countries: [],
  isLoading: false,
  error: ''
};

const countryReducer = createReducer(
  initialState,
  on(
    CountryUIActions.loadCountriesRequested,
    state => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    CountryAPIActions.loadCountriesSuccess,
    (state, { countries }) => ({
      ...state,
      countries,
      isLoading: false
    })
  ),
  on(
    CountryAPIActions.loadCountriesFailed,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return countryReducer(state, action);
}
