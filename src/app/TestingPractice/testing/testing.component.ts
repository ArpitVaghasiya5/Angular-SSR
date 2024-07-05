import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  add(a: number, b: number) {
    return a + b;
  }

  constructor() {}
}
