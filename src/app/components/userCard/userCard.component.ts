import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { ClientModel } from 'src/app/models/clientesModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-userCard',
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.scss']
})
export class UserCardComponent implements OnInit {
  public clients = new Array<ClientModel>();
  public model = ClientModel;
  public placeholder = 'choose Date'

  constructor(
    public userService: UserService,
  ){
    this.userService.currentListClientData.subscribe(data => {
      this.clients = data;
    })
  }

  ngOnInit(): void {

  }

}
