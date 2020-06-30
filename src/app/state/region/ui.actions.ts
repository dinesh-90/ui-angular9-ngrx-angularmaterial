import { createAction, props } from '@ngrx/store';

export const appComponentInitialized = createAction(
  '[App Component] Initialized'
);

export const loadRegionsRequested = createAction(
  '[App Component] Load regions Requested',
  props<{}>()
);
