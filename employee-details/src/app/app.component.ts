import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-details';
  employees: any[] = [
    {sno: '1', name: 'ram', gender: 'male', salary: 34000, dob:' 06 / 1 / 1996'},
    {sno: '2', name: 'krish', gender: 'male', salary: 64000, dob: '4 / 8 / 1995'},
    {sno: '3', name: 'sree', gender: 'female', salary: 44000, dob: '12 / 01 / 1994'},
    {sno: '4', name: 'nitya', gender: 'female', salary: 34000, dob: '11 / 01 / 1997'},
    { sno: '5', name: 'vysu', gender: 'female', salary: 34000, dob: '05 / 01 / 1996'},
  ]
}
