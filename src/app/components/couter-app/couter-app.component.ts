import { Component } from '@angular/core';

@Component({
  selector: 'app-couter-app',
  templateUrl: './couter-app.component.html',
  styleUrls: ['./couter-app.component.css'],
})
export class CouterAppComponent {
  public count = 0;

  counter(param: string) {
    if (param === 'add') {
      this.count = this.count + 1;
    } else if (param === 'sub') {
      this.count = this.count - 1;
    }
  }
}
