import { Component } from '@angular/core';
import { ExperienceModel } from 'src/app/models/experienceModel.model';
import { ExperienceService } from 'src/app/services/experience-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    public experiences = new Array<ExperienceModel>();
    public model = ExperienceModel;

    constructor(
        public experienceService: ExperienceService,
      ){
        this.experienceService.currentListExperienceData.subscribe(data => {
          this.experiences = data;
        })
      }
}
