import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient as httpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: httpClient
    ) { }

    getMethod(endPoint){
      const url: string = environment.urlUsers + endPoint;
      return this.http.get(url);
    }

    postMethod(endPoint, data){
      const url: string = environment.urlUsers + endPoint;
      return this.http.post(url, data);
    }

    putMethod(endPoint, data){
      const url: string = environment.urlUsers + endPoint;
      return this.http.put(url, data);
    }

    delteMethod(endPoint){
      const url: string = environment.urlUsers + endPoint;
      return this.http.delete(url);
    }
}
