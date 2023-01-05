import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Subash';
  myArray = ['Item-1', 'Item-3', 'Item-3', 'Item-4'];
  myObject = {
    fname: 'Subash',
    lname: 'Pandey',
    age: '24',
  };
}
