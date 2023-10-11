import { Component, Input, ElementRef } from '@angular/core';
import { Group } from '../group.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  @Input() group!: Group;

  deleteExpense(event: any) {
    this.group.deleteExpense(event);
  }

  addExpense(title: string, payingAmount: any) {
    if (title === '' || payingAmount <= 0) {
      return;
    }
    let shouldContinue = true;

    if (this.group.alreadyHasExpense(title)) {
      shouldContinue = false;
    }

    if (!shouldContinue) {
      return;
    }

    shouldContinue = false;
    const payForCheckBoxs: any = document.getElementsByClassName('payingFor');
    for (let i = 0; i < payForCheckBoxs.length; i++) {
      if (payForCheckBoxs[i].checked) {
        shouldContinue = true;
        break;
      }
    }

    if (!shouldContinue) {
      return;
    }

    const tempExp = this.group.addExpense(title, payingAmount);
    const paidBy: any = document.getElementById('by');
    for (let i = 0; i < this.group.participants.length; i++) {
      const p = this.group.participants[i];
      if (p.name === paidBy.value) {
        tempExp.setPaidBy(p);
      }

      const pPaidFor: any = document.getElementById(p.name);
      if (pPaidFor !== undefined && pPaidFor !== null && pPaidFor.checked) {
        tempExp.addPerson(p);
      }
    }
    this.group.minimizeTransactions();
  }
}
