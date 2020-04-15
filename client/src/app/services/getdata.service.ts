import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICountryCase } from '../model/case.modle';
import { IDoughnutData } from '../model/doughnut.model';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  AllCountriesData: any[] = [];
  constructor(private _http: HttpClient) { }
  public getLiveData(): Observable<any> {
    const headers = new HttpHeaders({ "Access-Control-Allow-Credentials": "true" })
    return this._http.get<any>("/users", { headers });
  }
  public saveData(data: any[]) {
    this.AllCountriesData = [...data];
  }
  public getDoughnutData() {
    return this.AllCountriesData[0];
  }

  public getSavedData(): any[] {
    return this.AllCountriesData;
  }
}
