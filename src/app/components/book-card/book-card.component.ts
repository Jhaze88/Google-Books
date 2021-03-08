import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ItemsEntity } from 'src/app/models/book';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() public bookArr: ItemsEntity;
  @Input() public src: string;
  @Input() public title: string;
  @Input() public routerLink: Array<string>;
  @Output() public $click: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(event): void {
    this.$click.emit(event);
  }
}
