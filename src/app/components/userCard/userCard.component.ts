import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio-service.service';
import { HttpClient } from '@angular/common/http';
import { ClientModel } from 'src/app/clientesModel';

@Component({
  selector: 'app-userCard',
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.scss']
})
export class UserCardComponent {
  public clients = new Array<ClientModel>();
  constructor(
    public portfolioService: PortfolioService,
  ){
    this.portfolioService.currentListClientData.subscribe(data => {
      this.clients = data;
    })
  }

}
