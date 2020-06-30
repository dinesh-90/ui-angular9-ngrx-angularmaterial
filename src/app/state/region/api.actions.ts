import { createAction, props } from '@ngrx/store';
import { Region } from 'src/app/models';

export const loadRegionsSuccess = createAction(
  '[Region API] Load All Succeeded',
  props<{ regions: Region[] }>()
);

export const loadRegionsFailed = createAction(
  '[Region API] Load All Failed',
  props<{ error: string }>()
);

