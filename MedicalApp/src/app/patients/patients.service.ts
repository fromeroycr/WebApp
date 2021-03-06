import { Injectable } from '@angular/core';
import { IPatient } from "./patient";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class PatientsService {

    private _patientsUrl = 'http://localhost:50186/api/Patients';

    constructor(private _http: HttpClient) {}

    getPatients(): Observable<IPatient[]> {
        return this._http.get<IPatient[]>(this._patientsUrl + "/GetPatients")
            .do( 
                data =>{                     
                     console.log( 'GetPatients ' ) ;
                }
            )
            .catch( this.handleError );            
    }

    getPatient(id: number): Observable<IPatient> {
        return this._http.get<IPatient[]>(this._patientsUrl + "/GetPatient/" + id)
            .do(  data => {                
                console.log( 'Get Patient ' ) ; 
            } )
            .catch( this.handleError );            
    }

    

    private handleError(err: HttpErrorResponse) {
        return Observable.throw(err);
    }
}