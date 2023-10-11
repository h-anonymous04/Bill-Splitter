import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupComponent } from './components/groups/group/group.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { ParticipantComponent } from './components/participants/participant/participant.component';
import { ExpenseComponent } from './components/expenses/expense/expense.component';
import { SuggestedPaymentsComponent } from './components/expenses/suggested-payments/suggested-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    GroupsComponent,
    GroupComponent,
    ParticipantsComponent,
    ParticipantComponent,
    ExpenseComponent,
    SuggestedPaymentsComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
