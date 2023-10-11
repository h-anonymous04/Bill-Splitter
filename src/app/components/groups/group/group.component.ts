import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent {
  @Input() groupName: string | undefined;
  @Output() deleteGroupEvent: EventEmitter<string> = new EventEmitter();
  confirmation: boolean = false;

  deleteGroup() {
    this.deleteGroupEvent.emit(this.groupName);
  }
}
