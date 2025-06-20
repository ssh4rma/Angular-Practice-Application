import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component {
  @Input() childName!: string | null;
  @Input() childAge!: string | null;
}
