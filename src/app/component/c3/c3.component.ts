import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.scss'],
})
export class C3Component {
  constructor(private sharedData: UserDataService) {}

  trigger(): void {
    this.sharedData.getVal();
    this.sharedData.setVal(100);
    this.sharedData.getVal();
  }
}
