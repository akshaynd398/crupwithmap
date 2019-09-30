import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { Observable } from 'rxjs';
import { text } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  btn: any;
  save: string;

  constructor(private employeeService: EmployeeService) {
    
   }

  ngOnInit() {


    
    
  }

//to add new employee
// createAndUpdate(currentEmployee: Employee ,isFromEdit){

  // if(isFromEdit==true)
  // {

  //    this.save="update";
  // }
  // //  element.textContent = "update";
  // //  element.disabled = true;





  
  createAndUpdate(currentEmployee: Employee){
     
 
    console.log(currentEmployee);

    

    if (currentEmployee.id !=null)
    {
    this.updateEmployee(currentEmployee);
  }
  else {
    
  this.createEmployee(currentEmployee);}

  }

   




  //whenever click on edit data dispalyed in input
  createEmployee(emp: Employee){
 
    
  this.employeeService.createEmployee(emp).subscribe();
 
  }
updateEmployee(emp: Employee){
  this.employeeService.updateEmployee(emp).subscribe();
}
clear(){
  this.employeeService.currentEmployee={
    id:null,
    firstname:"",
    lastname:"",
    designation:"",
    contact:null,
    address:"" ,
    emailaddress:"",
    latitude:"",
    longitude:""
  }
}

}
