import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('nameInput', {static: false}) nameElem: ElementRef;
  @ViewChild('amountInput', {static:false}) amountElem: ElementRef;

  @Output() inputData = new EventEmitter<Ingredient>();

  onAdd(){
    console.log(this.nameElem.nativeElement.value, " <--- name elem");
    const ingredient = new Ingredient(this.nameElem.nativeElement.value,
      this.amountElem.nativeElement.value);
    this.inputData.emit(ingredient);
    this.nameElem.nativeElement.value = null;
    this.amountElem.nativeElement.value = null;
  }

  onDelete(){

  }

  onClear(){

  }
}
