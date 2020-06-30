import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { RegionService } from '../../services';
import * as RegionAPIActions from './api.actions';
import * as RegionUIActions from './ui.actions';

@Injectable()
export class RegionStoreEffects {
  constructor(private regionService: RegionService, private actions$: Actions) {}

  // loadRegions
  loadRegions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionUIActions.loadRegionsRequested),
      mergeMap(action =>
        this.regionService.getRegions().pipe(
          map(regions => RegionAPIActions.loadRegionsSuccess({ regions })),
          catchError(error =>
            of(RegionAPIActions.loadRegionsFailed({ error: error.message }))
          )
        )
      )
    )
  );

  // showAlertOnFailure
  showAlertOnFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegionAPIActions.loadRegionsFailed),
        tap(({ error }) => window.alert(error))
      ),
    { dispatch: false }
  );
}
