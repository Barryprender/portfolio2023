import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EducationModel } from '../models/educationModel';
@Injectable({
  providedIn: 'root'
})

export class EducationService {

  public educationData = new BehaviorSubject<EducationModel>({} as EducationModel);
  currentDocumentData = this.educationData.asObservable();
  private educationListData = new BehaviorSubject<EducationModel[]>(
    new Array<EducationModel>(
      {
        title: 'Teamtreehouse.com (online education site for web professionals)',
        startDate: 'Nov 2013',
        endDate: 'Nov 2014',
        description: 'Front-end Web Development: HTML5, CSS3. Programming: JavaScript Foundations, JQuery Basics, Ajax Basics, Console Foundations, Accessibility',
      },
      {
        title: 'Ondas Escolares. Madrid',
        startDate: 'Oct 2012',
        endDate: 'Oct 2012',
        description: 'Web Design and development of web applications with HTML5,CSS3 and jQuery',
      },
      {
        title: 'Centro de enseñanza Adams. Madrid.',
        startDate: 'Oct 2008',
        endDate: 'Feb 2009',
        description: 'Web design and multimedia. Photoshop CS2, Dreamweaver 8, Flash 8, Fireworks 8, HTML and script languages',
      },
    )
  );
  currentListeducationData = this.educationListData.asObservable();

  public GetClientes(data: EducationModel[]) {
    this.httpClient.get('/api/education').subscribe(data => {
      console.log(data)
    });

    this.educationListData.next(data);
    return this.educationListData
  }

  constructor(
    public httpClient: HttpClient
  ) { }

}

