import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import * as fromCountry from './country.reducer';
import { CountryStoreEffects } from './country.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCountry.countryFeatureKey, fromCountry.reducer),
    EffectsModule.forFeature([CountryStoreEffects])
  ],
  declarations: []
})
export class CountryStateModule {}
