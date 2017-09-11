import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
  })
  export class DashboardComponent implements OnInit {
    // tslint:disable-next-line:no-trailing-whitespace
    
      heroes: Hero[] = [];
    // tslint:disable-next-line:no-trailing-whitespace
    
      constructor(private heroService: HeroService) { }
    // tslint:disable-next-line:no-trailing-whitespace
    
      ngOnInit(): void {
        this.heroService.getHeroes()
          .then(heroes => this.heroes = heroes.slice(1, 5));
      }
    // tslint:disable-next-line:eofline
    }