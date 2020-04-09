import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { newsMockup } from '../../news';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  
  news;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.news = newsMockup[+params.get('productId')];  
    });
  }

}
