import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() { }

  @Input('group')
  private dummyGroup: FormGroup;  

  ngOnInit() {
    var control = new FormControl('', [Validators.required]);
    this.dummyGroup.addControl('dummyInput', control);
  }
}
