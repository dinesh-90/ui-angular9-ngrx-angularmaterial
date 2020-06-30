import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models';


@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  @Input() country: Country;

  constructor() { }

  ngOnInit(): void { }
}
