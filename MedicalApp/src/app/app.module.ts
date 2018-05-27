import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { PatientListComponent } from './patients/patient-list.component';
import { PatientsService } from './patients/patients.service';
import { PatientsModule } from './patients/patients.module';
import { PatientDetailComponent } from './patients/patient-detail.component';
import { AppointmentTypesService } from './appointmenttypes/appointmenttypes.service';
import { CreateAppointmentComponent } from './appointments/create-appointment.component';
import { AppointmentsService } from './appointments/appointments.service';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PatientListComponent,
    PatientDetailComponent,
    CreateAppointmentComponent    
  ],  
  providers: [
    PatientsService,
    AppointmentTypesService,
    AppointmentsService    
  ],

  imports: [
    BrowserModule,    
    HttpClientModule,
    FormsModule ,
    RouterModule.forRoot( [        
        { path: 'welcome', component: WelcomeComponent },
        { path: 'patients', component:  PatientListComponent },
        { path: 'patient/:PatientID', component: PatientDetailComponent },
        { path: 'createAppointment/:PatientID', component: CreateAppointmentComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      ]
    )
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
