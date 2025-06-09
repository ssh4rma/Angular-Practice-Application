import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private _value = 50;

  getVal(): void {
    console.log(this._value);
  }

  setVal(newVal: number): void {
    this._value = newVal;
  }
}
