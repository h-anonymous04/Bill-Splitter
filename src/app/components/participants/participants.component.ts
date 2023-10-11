import { Component, Input } from '@angular/core';
import { Group } from '../group.model';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent {
  @Input() group!: Group;

  addParticipant(name: string) {
    if (name === '' || name === undefined) {
      return;
    }
    this.group.addPerson(name);
  }
}
