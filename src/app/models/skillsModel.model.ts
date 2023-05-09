export class SkillsModel {
    id = '';
    skill = '';
    description? = '';

    constructor(
        id: string,
        skill: string,
        description?: string,
    ) {
        this.id = id;
        this.skill = skill;
        this.description = description
    }
}
