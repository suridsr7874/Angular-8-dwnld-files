import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  username: string = '';
  // tslint:disable-next-line: no-inferrable-types
  password: string = '';
  // tslint:disable-next-line: no-inferrable-types
  msg: string = '';

  CheckLogin() {
    // tslint:disable-next-line: triple-equals
    if (this.username == 'admin' && this.password == 'manager') {
      this.msg = 'successful login';
    } else {
      this.msg = 'invalid login';
      t1.focus();
    }
  }
}
