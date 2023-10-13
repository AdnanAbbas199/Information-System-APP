import { HttpClient ,HttpHeaders ,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InfosystemService {
  apiUrl:string = environment.apiBaseURL;
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
  updateInfo(id:number,data: any): Observable<any> {
  
    return this._http.put('http://localhost:3000/InformationSystem/'+id, data);
  }

  login(data: any): Observable<any> {
  
    return this._http.put('http://localhost:3000/InformationSystemUsers', data);
  }

  //--========Users======--//

  getUsersList(): Observable<any> {
    return this._http.get(this.apiUrl + 'Users');
  }
  
addUsers(emp: any): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this._http.post<any>(this.apiUrl + 'Users/AddUsers', emp, httpOptions);
}

updateUsers(emp: any): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this._http.put<any>(this.apiUrl + 'Users/UpdateUsers/', emp, httpOptions);
}

deleteUsers(empId: number): Observable<number> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this._http.delete<number>(this.apiUrl + 'Users/DeleteUsers/' + empId, httpOptions);
}

}
