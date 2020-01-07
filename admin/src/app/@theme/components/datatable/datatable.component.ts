import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: '[thmDatatable]',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './datatable.component.html',
  host: {
    role: 'datatable'
  },
  // host: {
  //   role: 'alert',
  //   '[class.alert-dismissible]': 'dismissible'
  // },
  styleUrls: ['./datatable.scss']
})

export class DatatableComponent implements OnInit {

  @Input() datatitle: string;

  constructor(

  ) {}

  ngOnInit() {}
}
