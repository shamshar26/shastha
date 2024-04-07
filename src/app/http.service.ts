import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUniversity,ICountry } from './interfaces';
import {countries} from '../assets/countries.json'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpClient=inject(HttpClient);
  constructor() { 

  }
  getUniversity(){
    return this.httpClient.get<IUniversity[]>('http://universities.hipolabs.com/search?country=United+States');
  }


  getCountries() {
    return this.httpClient.get<{ countries: ICountry[] }>(
      '/assets/countries.json'
    );
  }
}
