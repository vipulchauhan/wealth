import { TaxForm } from './taxform.model';

export class Tax {
  public taxform: TaxForm[] = [];

  public standardDeduction = 50000;
  public professionalTax = 2400;

  constructor(public income: number, public deduction: number) {}

  calculate() {
    let index = 1;
    this.taxform.push(new TaxForm(index++, 'Income', this.income));
    this.taxform.push(
      new TaxForm(index++, 'Standard Deductions', this.standardDeduction)
    );
    this.taxform.push(
      new TaxForm(index++, 'ProfessionalTax', this.professionalTax)
    );

    const grossIncome =
      this.income - (this.standardDeduction + this.professionalTax);
    this.taxform.push(new TaxForm(index++, 'Gross Income', grossIncome));

    this.taxform.push(new TaxForm(index++, 'Deductions', this.deduction));
    const taxableIncome = grossIncome - this.deduction;
    this.taxform.push(new TaxForm(index++, 'Taxable Income', taxableIncome));
    console.log(taxableIncome);
  }
}
