import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Filter } from '../dataModels/filter';
@Injectable({
  providedIn: 'root'
})
export class FilterService {

  baseUrl = 'http://localhost:4201/api/filters'
  
  constructor(private http: HttpClient) { }

  getFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(this.baseUrl)
  }
}
