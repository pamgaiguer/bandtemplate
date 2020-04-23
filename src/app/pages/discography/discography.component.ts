import { Component, OnInit } from '@angular/core';
import { DiscographyMockup } from '../../API';


@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss']
})
export class DiscographyComponent implements OnInit {
  discoData =  DiscographyMockup  ;

  constructor() { }

  ngOnInit(): void {
  }

}
