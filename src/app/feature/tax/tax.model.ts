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
    let rebate = 0;
    let tax10 = 0;
    let tax20 = 0;
    let tax30 = 0;
    if (taxableIncome > 250000) {
      if (taxableIncome > 500000) {
        if (taxableIncome > 1000000) {
          tax30 = (taxableIncome - 1000000) * 0.3;
          tax20 = 500000 * 0.2;
          tax10 = 250000 * 0.05;
        } else {
          // between 5lac to 10lac
          tax20 = (taxableIncome - 500000) * 0.2;
          tax10 = 250000 * 0.05;
        }
      } else {
        // between 250000 to 500000
        tax10 = (taxableIncome - 250000) * 0.05;
        rebate = tax10;
      }
    }
    this.taxform.push(new TaxForm(index++, 'Income Taxed at 10%', tax10));
    this.taxform.push(new TaxForm(index++, 'Income Taxed at 20%', tax20));
    this.taxform.push(new TaxForm(index++, 'Income Taxed at 30%', tax30));
    this.taxform.push(new TaxForm(index++, 'Rebate', rebate));
    const finalTax = tax10 + tax20 + tax30 - rebate;
    this.taxform.push(new TaxForm(index++, 'Total Tax', finalTax));
  }
}
