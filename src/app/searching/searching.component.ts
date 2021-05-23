import { Component, OnInit } from '@angular/core';
import { JobOffering } from '../dataModels/job-offering';
import { Filter } from '../dataModels/filter';
import { JobOfferingsService } from "../services/job-offerings.service";
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {

  offerings: JobOffering[] = []
  filters : Filter[] = []
  
  constructor(private jos: JobOfferingsService, private fils: FilterService) { }

  ngOnInit(): void {
    this.getOfferings()
    this.getFilters()
  }
  getOfferings() {
    this.jos.getOfferings().subscribe(offers => this.offerings = offers)
  }
  getFilters() {
    this.fils.getFilters().subscribe(f => this.filters = f)
  }
}
