import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component {
  myForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Age: new FormControl('', [Validators.required, Validators.min(18)]),
  });
}
