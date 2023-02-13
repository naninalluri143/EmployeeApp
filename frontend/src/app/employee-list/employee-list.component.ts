import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  ngOnInit(): void {
    this.employees = [{
      "id":1,
      "firstname": "Srinivas",
      "lastname": "Nalluri",
      "gender": "male",
      "emailid": "sri@email.com",
      "designation": "Frontend developer",
      "isadmin": false
    },
    {
      "id":2,
      "firstname": "Achyut sai krishna",
      "lastname": "Dhulipudi",
      "gender": "male",
      "emailid": "ask@email.com",
      "designation": "Backend developer",
      "isadmin": true
    },
    {
      "id":3,
      "firstname": "Sadik",
      "lastname": "Shaik",
      "gender": "male",
      "emailid": "sadik@email.com",
      "designation": "Digital Marketing",
      "isadmin": false
    },
    {
      "id":4,
      "firstname": "Ramoji",
      "lastname": "Chandana",
      "gender": "female",
      "emailid": "ramoji@email.com",
      "designation": "Testing Engineer",
      "isadmin": false
    },
    {
      "id":5,
      "firstname": "Mark",
      "lastname": "Nicoles",
      "gender": "male",
      "emailid": "mark@email.com",
      "designation": "Frontend developer",
      "isadmin": false
    },
    {
      "id":6,
      "firstname": "Sana",
      "lastname": "Shaik",
      "gender": "female",
      "emailid": "sana@email.com",
      "designation": "Digital Marketing",
      "isadmin": false
    }];
  }
  OnEdit(){
    alert("edit function working!")
  }

  OnDelete(){
    alert("delete function working!")
  }
}
