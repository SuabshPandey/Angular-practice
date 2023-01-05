import { Component, Input } from '@angular/core';
// import { MyData } from './child.model';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css'],
})
export class ChildParentComponent {
  // public UserData: MyData = new MyData();

  // getName() {
  //   this.UserData.fname = 'Subash';
  //   this.UserData.age = 23;
  //   this.UserData.lname = 'Pandey';
  // }

  @Input() myName: string = '';
  @Input() myArray: string[] = [];
  @Input() myObject: any = {};
}
