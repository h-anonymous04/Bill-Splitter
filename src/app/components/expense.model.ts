import { Person } from './person.model';

export class Expense {
  public title!: string;
  public participants: Person[] = [];
  public amount: number = 0;
  public by!: Person;
  public date!: Date;

  constructor(title: string, amount: number) {
    this.date = new Date();
    this.title = title;
    this.amount = amount;
  }

  addPerson(person: Person) {
    this.participants.push(person);
  }

  setPaidBy(by: Person) {
    this.by = by;
  }
}
