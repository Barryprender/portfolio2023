import { ArrayType } from "@angular/compiler";

export class ExperienceModel {
  title = '';
  link = '';
  startDate = '';
  finishDate = '';
  position = '';
  skills = ['',''];
  description = '';

  constructor(
      title: string,
      link: string,
      startDate: string,
      finishDate: string,
      position: string,
      skills: Array<string>,
      description: string,
      ) {
    this.title = title;
    this.link = link
    this.startDate = startDate
    this.finishDate = finishDate
    this.position = position
    this.skills = skills
    this.description = description
  }
}
