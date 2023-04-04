import { Component } from "@angular/core";
import { SkillsModel } from "src/app/models/skillsModel";
import { Firestore, collection, addDoc, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {
    // public skills = new Array<SkillsModel>();
    public skills!: Observable<any>;
    public model = [] as unknown as SkillsModel;

    constructor(
        private firestore: Firestore,
    ) {
        this.getSkills();
    }

    public addSkill(f: any) {
        console.log(f.value)
        const collectionInstance = collection(this.firestore, 'Skills');
        addDoc(collectionInstance, f.value).then(() => {
            console.log('Data saved correctly');
        })
            .catch((err) => {
                console.log(err)
            })
    }

    public getSkills() {
        const collectionInstance = collection(this.firestore, 'Skills');
        // collectionData(collectionInstance).subscribe(val => {
        //     this.skills = val as SkillsModel[];
        // })
        this.skills = collectionData(collectionInstance, { idField: 'id'} );
    }

    public updateSKill(id: string, skill: string){
        const docInstance = doc(this.firestore, 'Skills', id);
        // const updateSKill = {
        //     skill: this.model.skill,
        //     id: this.model.id
        // }
        const updateSKill = {
            skill: 'test skill'
        }
        updateDoc(docInstance, updateSKill).then(()=>{
            console.log('Data updated correctly');
        }).catch((err) => {
            console.log(err);
        })
    }

    public DeleteSkill(id: string){}
}
