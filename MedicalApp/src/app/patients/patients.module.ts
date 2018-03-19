import { NgModule } from '@angular/core';
import { PatientListComponent } from './patient-list.component';
import { PatientDetailComponent } from './patient-detail.component';

import { RouterModule } from '@angular/router';

import { PatientsService } from './patients.service';


@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'patients', component: PatientListComponent },
        { path: 'patient/:PatientID', component: PatientDetailComponent }
    ])
  ],
  declarations: [
    PatientsService,
    PatientDetailComponent    
  ],
  providers: [
    PatientsService
  ]
})
export class PatientsModule { }
