import { createAction, props } from '@ngrx/store';
import { Country } from 'src/app/models';

export const loadCountriesSuccess = createAction(
  '[Country API] Load All Succeeded',
  props<{ countries: Country[] }>()
);

export const loadCountriesFailed = createAction(
  '[Country API] Load All Failed',
  props<{ error: string }>()
);

