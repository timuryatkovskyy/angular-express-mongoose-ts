import { Component, OnInit } from '@angular/core';
import { Faq } from '../dataModels/faq';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: Faq[] = []

  constructor(private faq_ser: FaqService) { }

  ngOnInit(): void {
    this.getFaqs()
  }
  getFaqs(): void {
    this.faq_ser.getFaqs().subscribe(faqs => this.faqs = faqs)
  }
}
