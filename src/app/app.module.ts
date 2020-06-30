import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { FormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { RegionStateModule } from "./state/region";
import { CountryStateModule } from "./state/country";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    CountryStateModule,
    RegionStateModule,
  ],
  declarations: [AppComponent, DropdownComponent, CountryDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
