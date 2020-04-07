import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { newsMockup } from '../../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class NewsComponent implements OnInit {
  allnews = newsMockup;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
     // customize default values of modals used by this component tree
     config.backdrop = 'static';
     config.keyboard = false;
   }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }

}
