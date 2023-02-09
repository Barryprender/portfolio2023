import { Component } from "@angular/core";
import { SkillsModel } from "src/app/models/skillsModel";
import { SkillsService } from "src/app/services/skills-service.service";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
  })

export class SkillsComponent {
    public skills = new Array<SkillsModel>();
    public model = SkillsModel;

    constructor(
        public skillsService: SkillsService,
      ){
        this.skillsService.currentListSkillsData.subscribe(data => {
          this.skills = data;
        })
      }
}
