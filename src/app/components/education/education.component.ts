import { Component } from '@angular/core';
import { EducationModel } from 'src/app/models/educationModel';
import { EducationService } from 'src/app/services/education-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
    public education = new Array<EducationModel>();
    public model = EducationModel;

    constructor(
        public educationService: EducationService,
      ){
        this.educationService.currentListeducationData.subscribe(data => {
          this.education = data;
        })
      }
}
