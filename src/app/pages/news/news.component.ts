import { Component, OnInit } from '@angular/core';
import { newsMockup } from '../../news';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  allnews = newsMockup;

  constructor() {
   }

  ngOnInit(): void {
  }
}
