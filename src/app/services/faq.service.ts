import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { Faq } from '../dataModels/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  baseUrl = 'http://localhost:4201/api/faq'
  
  constructor(private http: HttpClient) { }

  getFaqs(): Observable<Faq[]> {
   return this.http.get<Faq[]>(this.baseUrl)
  }
}
