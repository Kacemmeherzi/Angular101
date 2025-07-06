import { FormatWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent implements OnInit {
  add() {
    this.projects.push(this.addproject());
  }
  remove(i: number) {
    this.projects.removeAt(i);
  }
  submit() {
    this.submitted = true;

    if (
      this.form.get('accept_term') &&
      this.form.get('accept_term')?.value === false
    ) {
      alert('accept plz');
      return;
    }
    const fromwithoutpass = { ...this.form.value, password: '' };
    console.log(fromwithoutpass);
  }
  submitted = false;
  get controls() {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
      accept_term: new FormControl(false, [Validators.required]),
      projects: new FormArray([]),
    });
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
      const name = data.name;
      if (name === 'kacem' && this.form.contains('accept_term')) {
        this.form.removeControl('accept_term');
      }
    });
  }
  get projects() {
    return this.form.get('projects') as FormArray;
  }
  form!: FormGroup;
  addproject() {
    return new FormGroup({
      name: new FormControl(''),
      isValid: new FormControl(false),
    });
  }
}
