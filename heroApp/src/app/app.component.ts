import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
  <a routerLink="/dashboard" rounterLinkActive="active">Dashboard</a>
  <a routerLink="/heroes" rounterLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Tour of Heroes';
// tslint:disable-next-line:eofline
}