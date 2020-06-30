import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services';
import * as CountyAPIActions from './api.actions';
import * as CountryUIActions from './ui.actions';

@Injectable()
export class CountryStoreEffects {
  constructor(private countryService: CountryService, private actions$: Actions) {}

  // loadCountries
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryUIActions.loadCountriesRequested),
      mergeMap(action =>
        this.countryService.getCountries(action.region).pipe(
          map(countries => CountyAPIActions.loadCountriesSuccess({ countries })),
          catchError(error =>
            of(CountyAPIActions.loadCountriesFailed({ error: error.message }))
          )
        )
      )
    )
  );

  // showAlertOnFailure
  showAlertOnFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CountyAPIActions.loadCountriesFailed),
        tap(({ error }) => window.alert(error))
      ),
    { dispatch: false }
  );
}
