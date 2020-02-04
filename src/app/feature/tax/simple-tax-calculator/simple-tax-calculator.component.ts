import { Component, OnInit } from '@angular/core';
import { Tax } from '../tax.model';

@Component({
  selector: 'app-simple-tax-calculator',
  templateUrl: './simple-tax-calculator.component.html',
  styleUrls: ['./simple-tax-calculator.component.css']
})
export class SimpleTaxCalculatorComponent implements OnInit {
  constructor() {}
  tax: Tax = new Tax(0, 0);
  ngOnInit() {}

  onCalculate() {
    console.log('clicked');
    this.tax.calculate();
  }
}
