import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
    styleUrls: ['../app.component.css']

})
export class LoginComponent  {
    

    constructor(private router: Router) { }
 
    ngOnInit() {
       
    }
    onLoginClick(form:NgForm){
     
       if(form.value.uname == "Admin" && form.value.psw == "password" ){
         this.router.navigateByUrl('/grid');
       }
        else{
            alert("Athentication Failed");
        }
    }
    onResetClick(form:NgForm){
        form.reset();
    }
}