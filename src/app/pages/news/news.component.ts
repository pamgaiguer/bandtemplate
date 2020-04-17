import { Component, OnInit } from '@angular/core';
import { newsMockup } from '../../news';
// import { DotdotdotPipe } from '../..//pipes/dotdotdot.pipe'


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  // providers:[DotdotdotPipe]
})
export class NewsComponent implements OnInit {
  allnews = newsMockup;

  constructor(
    // private DotdotdotPipe: DotdotdotPipe
  ) {
   }

  ngOnInit(): void {
  }
}
