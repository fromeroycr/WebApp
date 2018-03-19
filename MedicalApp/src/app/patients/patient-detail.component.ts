import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPatient } from './patient';
import { PatientsService } from './patients.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  pageTitle: string = 'Patient ';
  errorMessage: string;
  patient: IPatient;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _patientsService: PatientsService) {
  }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('PatientID');
    this.getPatient(id);
  }

  getPatient(id: number) {
    this._patientsService.getPatient(id).subscribe(
      patient => this.patient = patient,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/patients']);
  }

}
