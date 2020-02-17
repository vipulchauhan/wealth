import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ErrorComponent } from './common/error/error.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SimpleTaxCalculatorComponent } from './feature/tax/simple-tax-calculator/simple-tax-calculator.component';
import { InvestmentComponent } from './feature/tax/investment/investment.component';
import { ExpenseComponent } from './feature/tax/expense/expense.component';
import { ViewComponent } from './feature/tax/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    SimpleTaxCalculatorComponent,
    InvestmentComponent,
    ExpenseComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
