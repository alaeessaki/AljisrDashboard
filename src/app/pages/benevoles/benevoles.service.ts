import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BenevolesService {

  constructor(private http: HttpClient) { 
    
  }
  getdata(){
    return this.http.get('../api/benevoles');
  }
  supprimerBenevole(benevole){
    let url = '../api/deletebenevole/'+benevole._id;
    return this.http.delete(url);
  }
  getBenevole(id){
    let url = '../api/benevoles/'+id;
    return this.http.get(url);
  }
  modifyBenevole(id, benevole){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    let url = '../api/modifyBenevole/'+id;
    return this.http.put(url, benevole, httpOptions);
  }
}
