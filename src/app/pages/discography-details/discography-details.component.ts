import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscographyMockup } from '../../API';

@Component({
  selector: 'app-discography-details',
  templateUrl: './discography-details.component.html',
  styleUrls: ['./discography-details.component.scss']
})
export class DiscographyDetailsComponent implements OnInit {
  
  discod;
  activatedRoute;

  alldisco = DiscographyMockup;
  name: any;
  
  constructor(
    private route: ActivatedRoute,
    
    ) { }
    
    ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        this.discod = DiscographyMockup[+params.get('discographyId')];  
        // console.log(this.discod);
      });
    }
  }
  