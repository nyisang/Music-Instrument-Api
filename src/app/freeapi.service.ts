import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpclient:HttpClient) { }

  getInstruments(): Observable<any>

  {
    return this.httpclient.get("https://my-json-server.typicode.com/vocanter-llc/music-students/instruments");
  }

  getStudentsForSelectedInstrument(selectedInstrumentId:string):Observable<any>
  {
    let params1 = new HttpParams().set('instrumentId', selectedInstrumentId);
    return this.httpclient.get("https://my-json-server.typicode.com/vocanter-llc/music-students/students",{params:params1});
  }
}
