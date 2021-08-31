import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Instrument } from './instrument';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'https://my-json-server.typicode.com/vocanter-llc/music-students';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch Students list
  getStudents(): Observable<Student> {
    return this.http.get<Student>(this.apiURL + '/students')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

    // HttpClient API get() method => Fetch Instruments list
    getInstruments(): Observable<Instrument> {
      return this.http.get<Instrument>(this.apiURL + '/instruments')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

  // HttpClient API get() method => Fetch Student
  getStudent(id): Observable<Student> {
    return this.http.get<Student>(this.apiURL + '/students/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  
  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}