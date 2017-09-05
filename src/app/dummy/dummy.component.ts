import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Question } from '../question';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  baseUrl: string = 'http://localhost:49385';

  constructor(private http: Http) { }

  @Input()
  private question: Question

  @Input('group')
  private dummyGroup: FormGroup;

  ngOnInit() {
    var control = new FormControl('', [Validators.required]);
    this.dummyGroup.addControl('dummyInput', control);
  }

  click() {
    console.log("click()");
  }

  fileChange(event) {
    let fi = event.srcElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];

        let formData:FormData = new FormData();
         formData.append(fileToUpload.name, fileToUpload);

        let headers = new Headers();
        headers.append('Accept', 'application/json');
        // DON'T SET THE Content-Type to multipart/form-data, You'll get the Missing content-type boundary error
        let options = new RequestOptions({ headers: headers });
        let url = this.baseUrl + "/api/answers/" + this.question.Id + "/evidence";
        console.log(url);
        this.http.post(url, formData, options)
                 .subscribe(r => console.log(r));
    }
  }
}
