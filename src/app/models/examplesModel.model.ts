export class ExamplesModel {
    projectName: string;
    techStack: string;
    duration: string;
    desctiption: string;
    images?: string[];

    constructor(
        projectName: string,
        techStach: string,
        duracion: string,
        descroiption: string,
        images?: string[]
    ){
        this.projectName = projectName
        this.techStack = techStach
        this.duration = duracion
        this.desctiption = descroiption
        this.images = images
    }
}
