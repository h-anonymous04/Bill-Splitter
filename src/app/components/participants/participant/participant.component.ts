import { Component, Input } from '@angular/core';
import { Person } from '../../person.model';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css'],
})
export class ParticipantComponent {
  @Input() participant!: Person;
  confirmation: boolean = false;
}
