import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../dataModels/user';
import { UserCredentials } from '../dataModels/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {
  baseUrl = 'http://localhost:4201/api'
  

  constructor(private http: HttpClient) { }

  loginJobSeekerProfile(creds: UserCredentials) {
      return this.http.post<User>(`${this.baseUrl}/auth`, creds)
  }
  createJobSeekerProfile(userData: User) {
    console.log(userData)
    return this.http.post<User>(`${this.baseUrl}/job-seeker`, userData, {observe: 'body', responseType: 'json'});
  }
  getJobSeekerProfile(id: number): Observable<User> {
    return this.http.get<User>(`/job-seeker/${id}`, {}).pipe()
  }
  findJobSeekerProfile(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/job-seeker`)
  }
  updateJobSeekerProfile(id: number) {
    return this.http.put<User>(`/job-seeker/${id}`, {}).pipe()
  }
  deleteJobSeekerProfile(id: number) {
    return this.http.delete<User>(`/job-seeker/${id}`, {}).pipe()
  }
}
