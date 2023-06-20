import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/api/notes/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:8080/api/notes');
  }
}
