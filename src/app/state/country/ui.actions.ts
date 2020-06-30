import { createAction, props } from '@ngrx/store';

export const loadCountriesRequested = createAction(
  '[App Component] Load countries Requested',
  props<{ region: string }>()
);
