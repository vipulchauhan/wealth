import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment.model';
import { InvestmentVal } from '../investmentVal.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  investment: Investment[] = [];
  investmentValues: InvestmentVal[] = [];

  // invForm = new FormGroup({});
  constructor() {
    console.log('constructor');
    this.investment.push(
      new Investment(
        1,
        '80C',
        'For investments in specified schemes, saving instruments etc.'
      ),
      new Investment(
        2,
        '80CCD1B',
        'Deduction for the deposit under a pension scheme notified by Central Government (NPS)'
      ),
      new Investment(
        3,
        'HRA',
        'Deduction for the deposit under a pension scheme notified by Central Government (NPS)'
      )
    );
    this.investment.forEach(e => {
      console.log(e.section);
      this.investmentValues.push(new InvestmentVal(e.id, e.section, 0));
    });
  }

  ngOnInit(): void {
    console.log('init');
  }

  onCalculate() {}
}
