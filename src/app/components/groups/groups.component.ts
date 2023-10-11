import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from '../group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent {
  @Output() groupChange = new EventEmitter();
  groups: Group[] = [];

  constructor() {
    let g = this.addGroup('TEST');
    if (g != undefined) {
      g.addPerson('A');
      g.addPerson('B');
      g.addPerson('C');
      g.addPerson('D');
    }
  }

  addGroup(name: string) {
    name = name.trim();
    if (name === undefined || name === '') {
      return;
    }
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].name === name) {
        return;
      }
    }
    const newG = new Group(name);
    this.groups.push(newG);
    return newG;
  }

  deleteGroup(name: string) {
    for (let i = this.groups.length - 1; i >= 0; i--) {
      if (this.groups[i].name === name) {
        this.groups.splice(i, 1);
      }
    }
    this.groupChange.emit(undefined);
  }
  selectGroup(group: Group | undefined) {
    this.groupChange.emit(group);
  }
}
