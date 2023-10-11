import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expense } from '../../expense.model';
import { Person } from '../../person.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent {
  @Input() expense!: Expense;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Input() alreadyHasExpense!: (title: string) => boolean;
  @Input() minimizeTransactions!: () => void;
  public hoveredParticipant: string | null = null;

  deleteExpense() {
    this.deleteEvent.emit(this.expense.title);
  }

  // deleteParticipant(p: Person) {
  //   if (p === null) {
  //     return;
  //   }
  //   for (let i = 0; i < this.expense.participants.length; i++) {
  //     if (p === this.expense.participants[i]) {
  //       this.expense.participants.splice(i, 1);
  //     }
  //   }
  //   this.minimizeTransactions();
  // }
}
