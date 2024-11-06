// src/app/shopping-list/shopping-list.component.ts
import { Component } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  items: Item[] = [];
  nextId = 1;

  addItem(name: string) {
    const newItem: Item = { id: this.nextId++, name, bought: false };
    this.items.push(newItem);
  }

  toggleBought(item: Item) {
    item.bought = !item.bought;
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
