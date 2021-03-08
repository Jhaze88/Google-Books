import { Component, Input, OnInit } from '@angular/core';
import { ItemsEntity } from 'src/app/models/book';

@Component({
  selector: 'info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.scss'],
})
export class InfoDetailsComponent implements OnInit {
  /**
   * @Input
   * @name bookSelected
   * @type ItemsEntity
   * @description data passed by the father in Input
   */
  @Input() bookSelected: ItemsEntity;

  constructor() {}

  ngOnInit(): void {}
}
