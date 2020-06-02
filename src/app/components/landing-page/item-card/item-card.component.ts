import { Component, OnInit, Input } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { Item } from '../models/item';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  faBookmark = faBookmark;

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

  getUrl() {
    return this.item.img;
  }

}
