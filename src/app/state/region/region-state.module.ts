import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RegionStoreEffects } from './region.effects';
import * as fromRegion from './region.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRegion.regionFeatureKey, fromRegion.reducer),
    EffectsModule.forFeature([RegionStoreEffects])
  ],
  declarations: []
})
export class RegionStateModule {}
