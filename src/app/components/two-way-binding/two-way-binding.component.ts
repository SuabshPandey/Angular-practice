import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  public fname = '';
  public lname = '';
  public email = '';
  public mobile = '';
  public password = '';
  public display = false;

  onSubmit() {
    alert('Form Submitted');
    this.display = true;
    console.log(this.fname, this.lname, this.email, this.mobile);
  }
  clear() {
    this.display = false;
  }
}
