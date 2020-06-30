import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegion from './region.reducer';

// Lookup the 'Joke' feature state managed by NgRx
const getRegionState = createFeatureSelector<fromRegion.State>(
  fromRegion.regionFeatureKey
);

export const selectRegionList = createSelector(
  getRegionState,
  state => state.regions
);

export const selectRegionError = createSelector(
  getRegionState,
  state => state.error
);

export const selectRegionListIsLoading = createSelector(
  getRegionState,
  state => state.isLoading
);

export const selectRegionViewModel = createSelector(
  selectRegionList,
  selectRegionError,
  selectRegionListIsLoading,
  (regions, error, loading) => ({
    regions,
    error,
    loading
  })
);
