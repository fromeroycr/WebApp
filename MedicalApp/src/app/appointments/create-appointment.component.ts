import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PatientsService } from '../patients/patients.service';
import { IPatient } from '../patients/patient';
import { patch } from 'webdriver-js-extender';
import { IAppointmentType } from '../appointmenttypes/appointmenttype';
import { AppointmentTypesService } from '../appointmenttypes/appointmenttypes.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  pageTitle: string = 'Create Appointment';
  patient: IPatient;
  appointmentTypes: IAppointmentType[] = [];
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _patientsService: PatientsService, private _appointmentTypesService: AppointmentTypesService)  
  {  }

  ngOnInit() {
    const id =+ this._route.snapshot.paramMap.get('PatientID');
    this.getPatient(id);
  }

  getPatient(id: number){
    this._patientsService.getPatient(id).subscribe(
      
      patient => {        
        this.patient = patient;
        this.patient.Gender = String( patient.Gender );        
      },
      error => this.errorMessage = <any> error
    );
  }

  
  getAppointmentTypes(){
    this._appointmentTypesService.getAppointmentTypes().subscribe(
      appointmentTypes => {
        debugger;
        this.appointmentTypes = appointmentTypes;
      },
      error => this.errorMessage = <any> error
    );
  }
}
