import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from "../services/job-seeker.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private jss: JobSeekerService) { }

  ngOnInit(): void {
  }
  getProfile(id: number) {
    this.jss.getJobSeekerProfile(id).subscribe(user => console.log(user))
  }

}
