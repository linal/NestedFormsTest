import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      userId: ["", Validators.required],
      dummy: this.fb.group({
        /*dummyInput: ["", Validators.required]*/
      }),
      dummy2: this.fb.group({
        /*dummyInput: ["", Validators.required]*/
      })
    });
  }
}
