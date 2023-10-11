import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InfosystemService {

  constructor(private _http: HttpClient) { }

  addInfo(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/InformationSystem', data);
  }
  getInfo(): Observable<any> {
    return this._http.get('http://localhost:3000/InformationSystem');
  }
  deleteInfo(id:number): Observable<any> {
    return this._http.delete('http://localhost:3000/InformationSystem/'+id);
  }
}
