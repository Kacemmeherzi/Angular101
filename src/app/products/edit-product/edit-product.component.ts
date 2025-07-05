import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnChanges, OnInit {
  submit() {
    console.log(this.form.value);
    this.UpdatedProductEvent.emit(this.form.value);
    this.visible = false;
  }
  form!: FormGroup;
  @Input({ required: true }) product!: Product;
  @Output() UpdatedProductEvent: EventEmitter<Product> =
    new EventEmitter<Product>();
  constructor() {}
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.product.id ?? '', [Validators.required]),
      name: new FormControl(this.product.name ?? '', [Validators.required]),
      category: new FormControl(this.product.category ?? '', [
        Validators.required,
      ]),
      price: new FormControl(this.product.price ?? '', [Validators.required]),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.product = changes['product'].currentValue;
      console.log(this.product);
    }
  }
  visible = false;
  togglevisibility() {
    this.visible = !this.visible;
  }
}
