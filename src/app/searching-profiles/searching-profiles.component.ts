import { Component, OnInit } from '@angular/core';
import { Filter } from '../dataModels/filter';
import { User } from '../dataModels/user';
import { FilterService } from '../services/filter.service';
import {JobSeekerService} from '../services/job-seeker.service'

@Component({
  selector: 'app-searching-profiles',
  templateUrl: './searching-profiles.component.html',
  styleUrls: ['./searching-profiles.component.scss']
})
export class SearchingProfilesComponent implements OnInit {

  seekers: User[] = []
  filters: Filter[] = [] 

  constructor(private jss: JobSeekerService, private fils: FilterService) { }

  ngOnInit(): void {
    this.findJobSeekerProfile()
    this.getFilters()
  }
  findJobSeekerProfile() {
    this.jss.findJobSeekerProfile().subscribe(s => this.seekers = s)
  }
  getFilters() {
    this.fils.getFilters().subscribe(f => this.filters = f)
  }
}
