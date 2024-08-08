import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/services/rest-api.service';
import { Students } from 'src/shared/students';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup;
  studentInfo!: Students ;
  httpStatus!:HttpStatusCode; 
  
  

  constructor(private formBuilder: FormBuilder, private restApi:RestApiService, private router:Router, private restService : RestApiService) {
    this.form = formBuilder.group({
      name: ["",[
        Validators.minLength(2),
        Validators.required
      ]],
      lastName: ["",[
        Validators.minLength(2),
        Validators.required
      ]],
      faculty: ["",Validators.required],
      department: ["",Validators.required],
      phoneNumber: ["",[
        Validators.pattern("^[0-9]*$"),
        Validators.required,
        Validators.minLength(11)
      ]],
      isPlaysBefore: [""],
      whichSquad:["",]
      

    });
  }

  get name(){
    return this.form.get('name');
  }
  get lastName(){
    return this.form.get('lastName');
  }
  get faculty(){
    return this.form.get('faculty');
  }
  get department(){
    return this.form.get('department');
  }
  get phoneNumber(){
    return this.form.get('phoneNumber');
  }
  get isPlaysBefore(){
    return this.form.get('isPlaysBefore');
  }
  get whichSquad(){
    return this.form.get('whichSquad');
  }

  ngOnInit(): void {}
  inputVisible: boolean = false;

  toggleInputVisibility() {
    this.inputVisible = !this.inputVisible;
  }

  onSubmit(data:{name:string, lastName:string , faculty:string , department:string, phoneNumber:number, isPlaysBefore:string,whichSquad:string}){
    this.studentInfo=this.form.value;
    console.log("STUDENT BİLGİSİ " + JSON.stringify(this.studentInfo));
    this.form.reset();
    this.restService.addStudent(this.studentInfo).subscribe(resp=>{
      let status =  HttpStatusCode.Created
      this.httpStatus = HttpStatusCode.Created
      console.log("RESP : ! *** "+status);
      
    })

    
  }

  addStudent(dataStudent:any){
    this.restApi.addStudent(this.form.value);
    // console.log("THIS FORM VALUE "+ JSON.stringify(this.form.value));
  }

  


}
