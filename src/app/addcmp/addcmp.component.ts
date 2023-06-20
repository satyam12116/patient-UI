import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-addcmp',
  templateUrl: './addcmp.component.html',
  styleUrls: ['./addcmp.component.scss']
})
export class AddcmpComponent {
  empForm: FormGroup;

  constructor(
    private _coreService: CoreService,
    private http:HttpClient,private route:Router,
    private _fb: FormBuilder,
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      middleName: '',
      age: '',
      contactNumber: '',
      gender: '',
      urineTestResults: '',
      bloodTestResults: '',
    });
  }
  onFormSubmit() {
    if (this.empForm.valid) {
     this.http.post<any>("http://localhost:8080/api/notes",this.empForm.value).subscribe(res=>{
      if(res){
        this._coreService.openSnackBar('patient detail added!');
        this.route.navigate(['/table']);
      }
     })
    }
  }
}
