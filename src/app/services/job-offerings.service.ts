import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { JobOffering } from '../dataModels/job-offering';

@Injectable({
  providedIn: 'root'
})
export class JobOfferingsService {

  baseUrl = 'http://localhost:4201/api/job-offering'

  constructor(private http: HttpClient) { }

  getOfferings(): Observable<JobOffering[]> {
    return this.http.get<JobOffering[]>(this.baseUrl)
  }
}
