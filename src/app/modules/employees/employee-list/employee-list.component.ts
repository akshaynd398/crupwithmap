import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
allEmployee:Employee[];
  width: any;
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployee();
    this.width!=30;
  }
  getAllEmployee(){
    this.employeeService.getAllEmployees().subscribe(
      (data:Employee[])=>
      {
        this.allEmployee = data;
        this.getAllEmployee();
      }
    );
  }
   





  // to edit the employee details on left side component. 
  edit(emp)
  {
    this.employeeService.currentEmployee = Object.assign({},emp);
  }


  //to delete the employee .. 

  deleteEmployee(id:number){

this.employeeService.deleteEmployee(id).subscribe(

  (data:Employee)=>{
    this.getAllEmployee();
  }
);



  }

}
