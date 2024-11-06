// src/app/add-item/add-item.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output() addItem = new EventEmitter<string>();
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.itemForm.valid) {
      this.addItem.emit(this.itemForm.value.name);
      this.itemForm.reset();
    }
  }
}
