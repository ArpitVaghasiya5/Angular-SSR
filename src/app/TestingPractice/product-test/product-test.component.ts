import { Component } from '@angular/core';

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrl: './product-test.component.css'
})
export class ProductTestComponent {
    isOn = false;
    clicked() {
      this.isOn = !this.isOn;
    }
    get message() {
      return `The light is ${this.isOn ? 'On' : 'Off'}`;
    }
}
