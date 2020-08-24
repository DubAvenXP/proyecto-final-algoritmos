import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient as httpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: httpClient
    ) { }

    getMethod(url){
      return this.http.get(url);
    }

}
