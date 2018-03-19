import { Component, OnInit } from '@angular/core';
import { IPatient } from './patient';
import { PatientsService } from "./patients.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  pageTitle: string = 'Patient List!';
  patients: IPatient[] = [];
  errorMessage: string;

  constructor(private _patientsService: PatientsService) {
  }

  ngOnInit() {
    this._patientsService.getPatients()
      .subscribe( patients => {
            this.patients = patients;          
          },
          error => this.errorMessage = <any> error
       );
  }

}
