export class examplesModel {
    projectName = ''
    techStack = ''
    duration = ''
    desctiption = ''
    images = ['']

    constructor(
        projectName: string,
        techStach: string,
        duracion: string,
        descroiption: string,
        images: [string]
    ){
        this.projectName = projectName
        this.techStack = techStach
        this.duration = duracion
        this.desctiption = descroiption
        this.images = images
    }
}
