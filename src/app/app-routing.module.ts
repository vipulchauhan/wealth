import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './common/error/error.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { InvestmentComponent } from './feature/tax/investment/investment.component';
import { ExpenseComponent } from './feature/tax/expense/expense.component';
import { ViewComponent } from './feature/tax/view/view.component';
import { SimpleTaxCalculatorComponent } from './feature/tax/simple-tax-calculator/simple-tax-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/tax', pathMatch: 'full' },
  { path: 'tax', component: SimpleTaxCalculatorComponent },
  { path: 'invest', component: InvestmentComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'view', component: ViewComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
