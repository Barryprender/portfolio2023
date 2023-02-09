import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillsModel } from '../models/skillsModel';
@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  public skillsData = new BehaviorSubject<SkillsModel>({} as SkillsModel);
  currentDocumentData = this.skillsData.asObservable();
  private skillsListData = new BehaviorSubject<SkillsModel[]>(
    new Array<SkillsModel>(
      {
        skill:'HTML'
      },
      {
        skill: 'CSS/SCSS'
      },
      {
        skill: 'JS'
      },
      {
        skill: 'JQuery'
      },
      {
        skill: 'ANGULAR.js'
      },
      {
        skill: 'Angular.io'
      },
      {
        skill: 'GIT'
      },
      {
        skill: 'NODE.js'
      },
      {
        skill: 'Responsive Web'
      },
      {
        skill: 'Cross Browser Compatibility'
      },
      {
        skill: 'REST'
      },
      {
        skill: 'Emails Layouts'
      },
      {
        skill: 'Zeplin'
      },
    )
  );
  currentListSkillsData = this.skillsListData.asObservable();

  public GetClientes(data: SkillsModel[]) {
    this.httpClient.get('/api/skills').subscribe(data => {
      console.log(data)
    });

    this.skillsListData.next(data);
    return this.skillsListData
  }

  constructor(
    public httpClient: HttpClient
  ) { }

}

