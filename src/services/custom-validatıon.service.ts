import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatıonService {

  constructor() { }
/*
  patternValidator():ValidatorFn{
    return (control:AbstractControl): {[key:string]:any} => {
      if(!control.value){
        return null;
      }
      const regex = new RegExp('^[0-9]{13}$');
      const valid = control.value &&  regex.test(control.value);
      return valid? null :{invalidPassword:true};

    }
  }*/
  MatchPassword(password:string, confirPassword:string){

  }
}
