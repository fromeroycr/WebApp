import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { PatientListComponent } from './patients/patient-list.component';
import { PatientsService } from './patients/patients.service'



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PatientListComponent
  ],  
  providers: [
    PatientsService    
  ],

  imports: [
    BrowserModule,    
    HttpClientModule,
    RouterModule.forRoot( [        
        { path: 'welcome', component: WelcomeComponent },
        { path: 'patients', component:  PatientListComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      ]
    )    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
