import { Component, OnInit } from '@angular/core';
import { InputTextDemo } from './prime.model';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css'],
})
export class PrimeNgComponent {
  public loginModel: InputTextDemo = new InputTextDemo();
  public display: boolean = false;
  public fname;

  onClick() {
    this.loginModel.onClick();
  }
  onSubmit() {
    this.loginModel.fname = this.fname;
    alert(this.loginModel.fname);
  }

  showDialog() {
    this.display = true;

    console.log('Display property is set to', this.display);
  }
}
