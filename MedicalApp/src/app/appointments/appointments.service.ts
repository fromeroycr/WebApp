import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IAppointment } from './appointment';
import { Observable } from 'rxjs/Observable';
import { ApiInfo } from '../shared/api-info';
import { HttpHeaders } from '@angular/common/http';
import  'rxjs/add/operator/do' ;
import  'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
      //,'Authorization': 'my-auth-token'
    }
  )
};

@Injectable()
export class AppointmentsService {

  constructor(private _http: HttpClient) { }  

  createAppointment(appointment: IAppointment): Observable<IAppointment> {
    

    return this._http.post<IAppointment>(ApiInfo.ApiUrl + "Appointments/CreateAppointment", appointment, httpOptions  )
    .do(data => { 
     
      console.log(  JSON.stringify(data ) ); 
    }) 
    
    .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    
    console.log(JSON.stringify(error));
    return Observable.throw(error);
  }

}
