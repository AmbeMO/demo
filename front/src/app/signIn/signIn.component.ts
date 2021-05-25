import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss']
})

export class SignInComponent implements OnInit{
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
    })
  }

  submit() {
    console.log('Form', this.form)
    const formData = {...this.form.value}

    console.log('Form Data: ', formData)
  }
}
