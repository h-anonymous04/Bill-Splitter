import { Expense } from './expense.model';
import { Person } from './person.model';
import { Transaction } from './transaction.model';

export class Group {
  public name: string | undefined;
  public participants: Person[] = [];
  public expenses: Expense[] = [];
  public minimizedTransactions: Transaction[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addPerson(name: string) {
    const person = new Person(name);
    this.participants.push(person);
  }

  minimizeTransactions() {
    console.log(this.participants);

    const n = this.participants.length;

    const personMap: {
      [key: string]: number;
    } = {};

    const personNumMap: {
      [key: number]: Person;
    } = {};

    for (let i = 0; i < n; i++) {
      const person = this.participants[i];
      personMap[person.name] = i;
    }

    for (let i = 0; i < this.participants.length; i++) {
      const element = this.participants[i];
      personNumMap[i] = element;
    }

    const transactionGraph = new Array(n)
      .fill(0)
      .map(() => new Array(n).fill(0));

    for (let i = 0; i < this.expenses.length; i++) {
      const expense = this.expenses[i];
      const paidBy = expense.by;
      const participants = expense.participants;

      for (let j = 0; j < participants.length; j++) {
        const participant = participants[j];
        transactionGraph[personMap[participant.name]][personMap[paidBy.name]] +=
          expense.amount / participants.length;
      }
    }

    for (let i = 0; i < transactionGraph.length; i++) {
      personNumMap[i].totalExpenditure = 0;
      for (let j = 0; j < transactionGraph.length; j++) {
        personNumMap[i].totalExpenditure += transactionGraph[i][j];
      }
    }

    for (let i = 0; i < transactionGraph.length; i++) {
      for (let j = 0; j <= i; j++) {
        if (transactionGraph[i][j] > transactionGraph[j][i]) {
          transactionGraph[j][i] =
            transactionGraph[i][j] - transactionGraph[j][i];
          transactionGraph[i][j] = 0;
        } else {
          transactionGraph[i][j] =
            transactionGraph[j][i] - transactionGraph[i][j];
          transactionGraph[j][i] = 0;
        }
      }
    }

    const totalAmount = new Array(n).fill(0);
    for (let i = 0; i < transactionGraph.length; i++) {
      let spent = 0,
        toReceive = 0;
      for (let j = 0; j < transactionGraph[i].length; j++) {
        spent += transactionGraph[i][j];
        toReceive += transactionGraph[j][i];
      }
      totalAmount[i] = spent - toReceive;
    }

    let zeroTransactions = (() => {
      let count = 0;
      for (let i = 0; i < totalAmount.length; i++) {
        if (totalAmount[i] == 0) {
          count++;
        }
      }
      return count;
    })();

    this.minimizedTransactions = [];

    while (true) {
      if (zeroTransactions == n) {
        break;
      }

      let minIndex = 0;
      let maxIndex = 0;

      for (let i = 1; i < totalAmount.length; i++) {
        if (totalAmount[i] < totalAmount[minIndex]) {
          minIndex = i;
        } else if (totalAmount[i] > totalAmount[maxIndex]) {
          maxIndex = i;
        }
      }

      let absMinIndex = 0;
      if (Math.abs(totalAmount[minIndex]) > Math.abs(totalAmount[maxIndex])) {
        absMinIndex = maxIndex;
      } else {
        absMinIndex = minIndex;
      }

      let newMinIndexAmount =
        totalAmount[minIndex] + Math.abs(totalAmount[absMinIndex]);
      let newMaxIndexAmount =
        totalAmount[maxIndex] - Math.abs(totalAmount[absMinIndex]);
      let transfer = Math.abs(totalAmount[absMinIndex]);

      totalAmount[minIndex] = newMinIndexAmount;
      totalAmount[maxIndex] = newMaxIndexAmount;

      if (!(transfer <= 0)) {
        this.minimizedTransactions.push(
          new Transaction(
            personNumMap[minIndex],
            personNumMap[maxIndex],
            transfer
          )
        );
      }
      zeroTransactions++;
    }
  }

  addExpense(title: string, amount: number) {
    const expense = new Expense(title, amount);
    this.expenses.push(expense);
    return expense;
  }

  alreadyHasExpense(name: string) {
    for (const expense of this.expenses) {
      if (expense.title === name) {
        return true;
      }
    }
    return false;
  }

  deleteExpense(title: string) {
    for (let i = this.expenses.length - 1; i >= 0; i--) {
      if (this.expenses[i].title === title) {
        this.expenses.splice(i, 1);
        this.minimizeTransactions();
      }
    }
  }
}
