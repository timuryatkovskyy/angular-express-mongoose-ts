import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from "../../services/job-seeker.service";
import { User } from '../../dataModels/user'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  userData: User = {
    profileType: '',
    name: '',
    lastname: '',
    email: '',
    password: ''
  }

  constructor(private jss: JobSeekerService) { }

  ngOnInit(): void {
  }
  createJobSeekerProfile(userData: User) {
    console.log(userData)
    this.jss.createJobSeekerProfile(userData).subscribe(x => console.log(x))
  }
  get diagnostic() {return JSON.stringify(this.userData)}
} 
