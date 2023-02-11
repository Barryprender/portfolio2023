import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExperienceModel } from '../models/experienceModel';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  public experienceData = new BehaviorSubject<ExperienceModel>({} as ExperienceModel);
  currentDocumentData = this.experienceData.asObservable();
  private experienceListData = new BehaviorSubject<ExperienceModel[]>(
    new Array<ExperienceModel>(
     {
        title: 'Arcmedia',
        link : 'www.arcmedia.ch',
        startDate : 'July 2017',
        finishDate : 'July 2019',
        position : 'Front End Developer',
        skills : ['HTML5', 'CSS', 'jQuery', 'Magento'],
        description : 'Code layouts from designer (psd) in HTML 5, CSS 3 and jquery. As the only front end developer I had to handle all the front end issues and modificaciones. The project is built on the Yii php CMV framework as well as bootstrap css framework and managed through GitHub VCS'
     },
     {
        title: 'Tessi Graddo II',
        link : 'www.tessi.eu/es',
        startDate : 'March 2016',
        finishDate : 'July 2017',
        position : 'Front End Developer',
        skills : ['HTML5', 'CSS/LESS', 'jQuery', ],
        description : 'Front End Developer HTML5, CSS3/LESS, Jquery. Code layouts for web applications  and  mobile devices/Responsive Design with HTML5, CSS3/LESS y Jquery. Mainly on the Keepunto.com project. Working with frameworks like Bootstrap, Yii PHP Framework. GitVCS'
     },
     {
        title: 'CECA Bank',
        link : 'www.ceca.es',
        startDate : 'April 2015',
        finishDate : 'March 2016',
        position : 'Front End Developer',
        skills : ['HTML5', 'CSS3/LESS', 'jQuery'],
        description : 'Code layouts for web applications  and  mobile devices/Responsive Design with HTML5, CSS3/LESS y Jquery. Mainly on the Keepunto.com project. Working with frameworks like Bootstrap, Yii PHP Framework. GitVCS'
     },
     {
        title: 'Vivocom',
        link : 'www.vivocom.eu',
        startDate : 'September 2014',
        finishDate : 'March 2015',
        position : 'Front End Developer',
        skills : ['HTML5', 'CSS3/LESS', 'jQuery'],
        description : 'Front End Developer HTML5, CSS3/LESS, Jquery. Code layouts for web applications  and  mobile devices/Responsive Design with HTML5, CSS3/LESS y Jquery. Mainly on the Keepunto.com project. Working with frameworks like Bootstrap, Yii PHP Framework. GitVCS.'
     },
     {
        title: 'Vocento',
        link : 'www.vocento.com',
        startDate : 'September 2014',
        finishDate : 'March 2015',
        position : 'Front End Developer',
        skills : ['HTML5', 'CSS3/LESS', 'jQuery'],
        description : 'Front End Developer HTML5, CSS3/LESS, Jquery. Collaborating in two of the media groups’ web projects, GUAPABOX and  ABC FOTO. Part of the team of 3 front end developers working on the general redesign of the groups 11 regional news websites.'
     },
     {
        title: 'Grupo Mercantis',
        link : 'www.grupomercantis.com',
        startDate : 'May 2008',
        finishDate : 'November 2011',
        position : 'Front End Developer',
        skills : ['HTML5', 'CSS3/LESS', 'jQuery'],
        description : 'HTML, CSS, Wordpress, Oscommerce, phpbb. Web editing and maintenance work in a team of web developers and programmers. Localization Work: Adapting websites en 12 languages  editing html/css, flash  (texts, images, animations) flash banners, image editing.'
     },
    )
  );
  currentListExperienceData = this.experienceListData.asObservable();
  // public experience[]: any[];

  public Getexperience(data: ExperienceModel[]) {
    this.httpClient.get('/api/exoerience').subscribe(data => {
      // this.clients = data;
      console.log(data)
    });
    this.experienceListData.next(data);
    return this.experienceListData
  }

  constructor(
    public httpClient: HttpClient
  ) { }

}

