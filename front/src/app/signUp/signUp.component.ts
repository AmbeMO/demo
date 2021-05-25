import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }

  submitUp() {
    console.log('Form', this.form)
    const formData = {...this.form.value}

    console.log('Form Data: ', formData)
  }
}
