import { Component } from '@angular/core';


@Component({
  selector: 'pm-root',
  template: `
    <div>
        <nav class='navbar navbar-dark bg-primary'>
          <div class='container'>
            <a class='navbar-brand'> {{pageTitle}} </a>
            <ul class='nav navbar-nav'>
                <li><a [routerLink]="['/welcome']">Home</a></li>
                <li><a [routerLink]="['/patients']">Patients List</a></li>
            </ul>
          </div>
        </nav>
        <div class='container'>
          <router-outlet></router-outlet>
        </div>
    </div>
    `,
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  pageTitle = 'Medical Web App';
}
