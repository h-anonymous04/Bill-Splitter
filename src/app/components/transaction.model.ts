import { Person } from './person.model';

export class Transaction {
  public from: Person;
  public to: Person;
  public amount: number;

  constructor(from: Person, to: Person, amount: number) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }

  public toString(): string {
    return `${this.from.name} -> ${this.to.name}: ${this.amount}`;
  }
}
