import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { stringify } from '@angular/core/src/util';
import  'rxjs/add/operator/do' ;
import  'rxjs/add/operator/catch';

import { ApiInfo } from '../shared/api-info';
import { IAppointmentType } from './appointmenttype';

@Injectable()
export class AppointmentTypesService {

  private _appointmentTypesUrl =  ApiInfo.ApiUrl +  'AppointmentTypes/GetAppointmentTypes'; 

  constructor(private _http: HttpClient) { }  
  
  getAppointmentTypes(): Observable<IAppointmentType[]>  {

    return this._http.get<IAppointmentType[]> (this._appointmentTypesUrl)
      .do(data => {         
        console.log('Appointment Types' + JSON.stringify(data));
      } )
      .catch(this.handleError);

  }  

  handleError(error: HttpErrorResponse){
    return Observable.throw(error);
  }
  
}
