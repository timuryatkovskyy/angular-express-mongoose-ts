import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../../dataModels/user-credentials';
import { JobSeekerService } from "../../services/job-seeker.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  creds: UserCredentials = {
    email: '',
    password: ''
  }
  constructor(private jss: JobSeekerService) { }

  ngOnInit(): void {
  }
  
  loginJobSeekerProfile(creds: UserCredentials) {
    this.jss.loginJobSeekerProfile(creds).subscribe(user => console.log(`Sign in comp's: ${user.name}`))
  }
  get diagnostic() {return JSON.stringify(this.creds)}
}
