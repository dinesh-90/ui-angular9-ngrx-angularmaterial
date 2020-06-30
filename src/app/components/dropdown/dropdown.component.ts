import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownConfig } from 'src/app/models/dropdown';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() title: string;
  @Input() items: Array<any>;
  @Input() config: DropdownConfig;

  @Output('onItemChange') change: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  onItemChange(event) {
    this.change.emit(event.value);
    console.log('event here', event);
  }
}
