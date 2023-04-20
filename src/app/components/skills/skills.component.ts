import { Component } from "@angular/core";
import { SkillsModel } from "src/app/models/skillsModel.model";
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {
    public isfocused: boolean = false;
    // Observable to store the skills data
    public skills!: Observable<any>;
    // Model for the skills data
    public model = [] as unknown as SkillsModel;
    public toggle: boolean = false;

    constructor(
        // Firestore instance
        private firestore: Firestore,
        ) {
            // Get the skills data from the database
            this.getSkills();
        }

        inputFocus(){
            this.isfocused = true;
            return this.isfocused;
        }

    public editDoc(){
        if(this.toggle){
            return false;
        }
        this.toggle = !this.toggle;
        return this.toggle;
    }

    // Add a skill to the database
    public addSkill(f: NgForm) {
        const collectionInstance = collection(this.firestore, 'Skills');
        addDoc(collectionInstance, f.value).then(() => {
            console.log('Data saved correctly');
        })
            .catch((err) => {
                console.log(err)
            })
    }

    // Get the skills data from the database
    public getSkills() {
        const collectionInstance = collection(this.firestore, 'Skills');
        this.skills = collectionData(collectionInstance, { idField: 'id'} );
    }

    // Update a skill in the database
    public updateSKill(id: string, skill: string){
        const docInstance = doc(this.firestore, 'Skills', id);
        const updateSKill = { skill: skill }
        updateDoc(docInstance, updateSKill).then(()=>{
            console.log('Data updated correctly');
        }).catch((err) => {
            console.log(err);
        })
    }

    public deleteDoc(id: string){
        const docInstance = doc(this.firestore, 'Skills', id);
        deleteDoc(docInstance).then(() => {
            console.log('data deleted')
        }).catch((err) => {
            console.log(err);
        })
    }
}
