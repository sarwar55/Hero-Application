import { Component, NgModule,Injectable} from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers,RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './grid.component.html',
   styleUrls: ['../app.component.css']

})

export class GridComponent  {

    popupTitle='Add Data';
    beanArray: any[] ;
    idValue: any[];
    items: any[];
    visbleModel:string= 'modal';
    blackmodalShow:string ='';
    id:number;
    beanname: any;
    brand: any;
    refreshrate: any;
    parameter: any;
    query: any;
    lastrefreshtime: any;
    addBtnVisible :string ='addBtnHide';
    updateBtnVisible :string ='updateBtnHide';

    // constructor(private http:Http){
    //    http.request('./data/sample.json')
    //                 .subscribe(response=> {console.log(response);this.beanArray = response.json()});
    // }
    ngOnInit() {
        this.beanArray= [
         {'id':101,'beanname':'one','brand':'star','refreshrate':'5','parameter':'aaa','query':'zzz','lastrefreshtime':'one'},
          {'id':102,'beanname':'two','brand':'google','refreshrate':'50','parameter':'ccc','query':'xxx','lastrefreshtime':'two'},
          {'id':103,'beanname':'three','brand':'fb','refreshrate':'55','parameter':'dddd','query':'yyy','lastrefreshtime':'three'},
          {'id':104,'beanname':'four','brand':'Tw','refreshrate':'45','parameter':'bbbb','query':'hhhh','lastrefreshtime':'four'},
          {'id':105,'beanname':'five','brand':'Frissbi','refreshrate':'45','parameter':'rrr','query':'llll','lastrefreshtime':'five'},
          {'id':106,'beanname':'six','brand':'starwar','refreshrate':'45','parameter':'eeee','query':'mmmmm','lastrefreshtime':'six'}
          
        ];
       this.items = [
            {label: 'Home', icon: 'fa-home'},
            {label: 'Grid', icon: 'fa-table'},
        ];
   
    };
   openEditModal(val){
      this.blackmodalShow ='blackmodal_show';
      this.visbleModel ='modals';
      this.popupTitle ='Edit data';
      this.updateBtnVisible = 'updateBtnVisible';
      this.addBtnVisible ='addBtnHide';
      this.id=val.id;
      this.beanname =val.beanname;
      this.brand=val.brand;
      this.refreshrate=val.refreshrate;
      this.parameter=val.parameter;
      this.query=val.query;
      this.lastrefreshtime=val.lastrefreshtime;
    }
    onclickAdd(){
       this.blackmodalShow ='blackmodal_show';
      this.visbleModel ='modals';
      this.popupTitle ='Add data';
      this.addBtnVisible ='addBtnVisible';
      this.updateBtnVisible = 'updateBtnHide';
    }
    onclickCancel(form: NgForm){
       this.blackmodalShow ='blackmodal_hide';
       this.visbleModel ='modal';
       form.reset();
    }
    onclickOK(form: NgForm){
      this.blackmodalShow ='blackmodal_hide';
      this.visbleModel ='modal';
      this.idValue=this.beanArray.slice(-1)[0].id+1;
      this.beanArray.push(form.value);
      this.beanArray.slice(-1)[0].id= this.idValue;
      this.beanArray = this.beanArray.slice();
      form.reset();
    }
    onclickUpdate(form: NgForm){
       this.blackmodalShow ='blackmodal_hide';
       this.visbleModel ='modal';
       for(var i=0;i<this.beanArray.length;i++){
          if(this.beanArray[i].id == form.value.id){
            this.beanArray[i].id =form.value.id;
            this.beanArray[i].beanname =form.value.beanname;
            this.beanArray[i].brand =form.value.brand;
            this.beanArray[i].refreshrate =form.value.refreshrate;
            this.beanArray[i].parameter =form.value.parameter;
            this.beanArray[i].query =form.value.query;
            this.beanArray[i].refreshrate =form.value.refreshrate;
          }

       }
       this.beanArray = this.beanArray.slice();
       form.reset();
    }
    registerUser(form: NgForm,e:Event) {
      debugger;
      console.log(form.value);
      this.idValue=this.beanArray.slice(-1)[0].id+1;
      this.beanArray.push(form.value);
      this.beanArray.slice(-1)[0].id= this.idValue;
      this.beanArray = this.beanArray.slice();
      form.reset();
      console.log(this.beanArray);
  }
  
 openDeleteRecord(val:any){
    for(var i=0;i< this.beanArray.length; i++){
         var obj = this.beanArray[i];
        if(val.id == obj.id ){
          this.beanArray.splice(i, 1);
        }
    }
      this.beanArray = this.beanArray.slice();
  }
   
}