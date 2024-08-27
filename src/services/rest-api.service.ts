import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { RegisterPageComponent } from 'src/app/register-page/register-page.component';
import { Students } from 'src/shared/students';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://93.177.100.252:8080/api/students';

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  }
  getStudents(){
    return this.http.get<Students>(this.apiUrl+"/getAllStudents").pipe(retry(1),catchError(this.handleError))
  }

  addStudent(student:Students){
    return this.http.post<any>(this.apiUrl+"/addStudent",student);
    
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });

    
  }
}
