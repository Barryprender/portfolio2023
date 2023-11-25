import { ExamplesModel } from "./examplesModel.model";

export class ExperienceModel {
    title : string;
    link : string;
    actual? : boolean = false;
    startDate : string;
    endDate : string;
    position: string;
    skills : string[];
    description : string;
    examples? : ExamplesModel[];

    constructor (
        title: string,
        link: string,
        actual: boolean,
        startDate: string,
        endDate: string,
        position: string,
        skills: string[],
        description: string,
        examples?: ExamplesModel[]
    ) {
        this.title = title;
        this.link = link;
        this.actual = actual;
        this.startDate = startDate;
        this.endDate = endDate;
        this.position = position;
        this.skills = skills;
        this.description = description;
        this.examples = examples;
    }
}
