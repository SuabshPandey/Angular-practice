import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  public name = 'Subash';
  public data = {
    fname: 'subash',
    lname: 'pandey',
    age: 24,
    address: 'ktm',
  };
  public myDate = new Date();
  public pipesList = [
    'lowercase',
    'uppercase',
    'titlecase',
    'slice',
    'json',
    'date',
    'currency',
    'percent',
    'decimal',
  ];
}
