import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  form: FormGroup;
  questions: Question[];

  constructor(private fb: FormBuilder) {

    this.questions = new Array<Question>();
    this.questions.push({
      Id: "q1",
      Name: "Upload something"
    });

    this.questions.push({
      Id: "q2",
      Name: "Upload something else"
    });

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
