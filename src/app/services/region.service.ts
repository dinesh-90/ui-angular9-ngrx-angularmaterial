import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Region } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private REGIONS: Region[] = [{
    id: "asia",
    name: "Asia"
  }, {
    id: "europe",
    name: "Europe"
  }];
  constructor() {}

  getRegions(): Observable<Array<Region>> {
    console.log(this.REGIONS);
    return from([this.REGIONS]);
  }
}
