import { Component, Input } from '@angular/core';
import { Transaction } from '../../transaction.model';
import { Person } from '../../person.model';

@Component({
  selector: 'app-suggested-payments',
  templateUrl: './suggested-payments.component.html',
  styleUrls: ['./suggested-payments.component.css'],
})
export class SuggestedPaymentsComponent {
  @Input() transactions!: Transaction[];
}
