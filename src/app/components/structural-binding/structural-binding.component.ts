import { Component } from '@angular/core';
// import { ShowData } from './structural.model';

@Component({
  selector: 'app-structural-binding',
  templateUrl: './structural-binding.component.html',
  styleUrls: ['./structural-binding.component.css'],
})
export class StructuralBindingComponent {
  display = false;
  isLoggedIn = false;
  userName = '';
  btnName = 'Show';
  loginBtn = 'Login';
  onClick(event: any) {
    if (this.userName === '') {
      this.display = !this.display;
      this.btnName = 'Hide';
      this.userName = 'Stranger';
    } else {
      this.display = !this.display;

      this.btnName = 'Hide';
    }
  }
  isLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    if (this.isLoggedIn) {
      this.loginBtn = 'Logout';
    } else {
      this.loginBtn = 'Login';
    }
  }
}
