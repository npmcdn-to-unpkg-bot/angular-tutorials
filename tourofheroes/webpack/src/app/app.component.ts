import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import './rxjs-extensions';


@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ],
  precompile: [DashboardComponent, HeroesComponent, HeroDetailComponent]

})
export class AppComponent {
  title = 'Tour of Heroes';
}
