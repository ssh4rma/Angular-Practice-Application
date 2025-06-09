import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  myForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Age: new FormControl('', [Validators.required, Validators.min(18)]),
  });

  constructor() {
    //Called first when the component is instantiated (but before bindings or inputs are set)
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called when an @Input() property value changes
    // Called before ngOnInit, and again whenever @Input changes
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    // Called once after the first ngOnChanges (or directly if no @Input)
    // Best place to run initialization logic (API calls, subscriptions, etc.)
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    // Called during every change detection run (can be many times)
    // Use this for custom change detection (rarely needed)
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    // Called once after Angular projects external content into the component
    // Only relevant if you're using <ng-content>
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // Called after every check of projected content
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // Called once after the component’s view and its child views have been initialized
    // This is where you can safely access the DOM or ViewChild
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's views and child views
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // Called right before the component is destroyed
    // Clean up here: unsubscribe from observables, clear intervals, etc.
    console.log('ngOnDestroy');
  }
}
