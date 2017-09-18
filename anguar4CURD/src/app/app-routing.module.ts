import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './loginview/login.component';
import {GridComponent} from './gridview/grid.component';
 import { AppComponent } from './app.component';

const appRoutes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'login', component: LoginComponent },
    { path: 'grid', component: GridComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )],
    exports: [RouterModule]
})

export class AppRoutingModule {}
