import { Component } from '@angular/core';
import { Group } from './components/group.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cashflow Minimizer';
  currentGroup!: Group;

  changeGroup(group: Group) {
    this.currentGroup = group;
  }
}
