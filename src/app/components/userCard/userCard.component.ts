import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio-service.service';
import { ClientModel } from 'src/app/clientesModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-userCard',
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.scss']
})
export class UserCardComponent implements OnInit {
  public clients = new Array<ClientModel>();

  constructor(
    public portfolioService: PortfolioService,
  ){
    this.portfolioService.currentListClientData.subscribe(data => {
      this.clients = data;
    })
  }

  ngOnInit(): void {

  }

}
