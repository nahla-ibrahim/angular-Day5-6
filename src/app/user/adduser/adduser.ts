import { Component } from '@angular/core';
import { Login } from './../../login/login';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {
  myform = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    imageUrl: new FormControl('', Validators.required),
  });

  users: any[] = [];

  get fname() {
    return this.myform.get('fname') as FormControl;
  }
  get lname() {
    return this.myform.get('fname') as FormControl;
  }
  get email() {
    return this.myform.get('email') as FormControl;
  }
  get imageUrl() {
    return this.myform.get('imageUrl') as FormControl;
  }
  saveUser() {
    if (this.myform.valid) {
      this.users.push(this.myform.value);
      this.myform.reset();
    }
  }
}
