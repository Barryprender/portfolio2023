export class SkillsModel {
    id = '';
    skill = '';
    description? = '';
    experience? = '';
    constructor(
        id: string,
        skill: string,
        description?: string,
        experience?: string,
    ) {
        this.id = id;
        this.skill = skill;
        this.description = description
        this.experience = experience
    }
}
