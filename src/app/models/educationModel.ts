export class EducationModel {
  title = '';
  startDate = '';
  endDate = '';
  description = '';

  constructor(
      title: string,
      startDate: string,
      endDate: string,
      description: string,
      ) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}
