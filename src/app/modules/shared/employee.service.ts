import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';

const headerOption = 
{
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};


@Injectable()
export class EmployeeService {

  mockUrl= "http://localhost:3000/Employee";
  currentEmployee: Employee = {
    id:null,
    firstname:"",
    lastname:"",
    designation:"",
    contact:null,
    address:"" ,
    emailaddress:"",
    latitude:"",
    longitude:"",
    
    
  }
  constructor(
    private http: HttpClient
  ) { }
getAllEmployees():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.mockUrl,headerOption);
}

deleteEmployee(id:number):Observable<Employee>{
  return this.http.delete<Employee>(this.mockUrl + '/' + id,headerOption);
}
createEmployee(emp: Employee):Observable<Employee>{
  return this.http.post<Employee>(this.mockUrl,emp,headerOption);
  }
  updateEmployee(emp: Employee):Observable<Employee>{
    return this.http.put<Employee>(this.mockUrl + '/' + emp.id,emp,headerOption);
    }

}
