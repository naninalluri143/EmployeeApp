import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {
  list  = [
    {
      name : 'sri',
      age : 17,
      place : 'guntur'
    },
    {
      name : 'jhon',
      age : 17,
      place : 'narasaraopeta'
    },
    {
      name : 'Demon',
      age : 17,
      place : 'losvegas'
    },
    {
      name : 'ironman',
      age : 21,
      place : 'newyork'
    },
  ]

  name = "angualr"
  placeholderValue = "Hello"

  OnClick(){
    console.log(this.name)
  }
}
