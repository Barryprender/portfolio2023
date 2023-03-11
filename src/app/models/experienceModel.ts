import { examplesModel } from "./examplesModel";

export class ExperienceModel {
  title = '';
  link = '';
  actual? = false;
  startDate = '';
  finishDate = '';
  position = '';
  skills = ['',''];
  description = '';
  examples?: examplesModel[];

  constructor(
      title: string,
      link: string,
      actual: boolean,
      startDate: string,
      finishDate: string,
      position: string,
      skills: Array<string>,
      description: string,
      examples: examplesModel[] | undefined
      ) {
    this.title = title
    this.link = link
    this.actual = actual
    this.startDate = startDate
    this.finishDate = finishDate
    this.position = position
    this.skills = skills
    this.description = description
    this.examples = examples
  }
}
