import { Action, createReducer, on } from '@ngrx/store';

import { Region } from '../../models';
import * as RegionAPIActions from './api.actions';
import * as RegionUIActions from './ui.actions';

export interface State {
  regions: Region[];
  isLoading: boolean;
  error: string;
}

export const regionFeatureKey = 'region';

export const initialState: State = {
  regions: [],
  isLoading: false,
  error: ''
};

const regionReducer = createReducer(
  initialState,
  on(
    RegionUIActions.loadRegionsRequested,
    state => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    RegionAPIActions.loadRegionsSuccess,
    (state, { regions }) => ({
      ...state,
      regions,
      isLoading: false
    })
  ),
  on(
    RegionAPIActions.loadRegionsFailed,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return regionReducer(state, action);
}
