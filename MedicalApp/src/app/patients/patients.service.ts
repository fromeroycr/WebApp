import { Injectable } from '@angular/core';
import { IPatient } from "./patient";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class PatientsService {

    private _patientsUrl = 'http://localhost:50186/api/Patients';

    constructor(private _http: HttpClient) {
        
    }

    getPatients(): Observable<IPatient[]> {
        return this._http.get<IPatient[]>(this._patientsUrl)
            .do( data => console.log( 'All ' + JSON.stringify(data))  )
            .catch( this.handleError );
            
    }

    private handleError(err: HttpErrorResponse) {
        return Observable.throw(err);
    }
}