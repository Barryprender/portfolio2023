import { Component, Input, OnInit } from "@angular/core";
import { SkillsModel } from "src/app/models/skillsModel.model";
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

    @Input() editable: boolean = false;
    public isfocused: boolean = false;
    public selectedSkillId: number = 0;
    // Observable to store the skills data
    public skills!: Observable<any>;
    // Model for the skills data
    public model: SkillsModel = {} as SkillsModel;
    public toggle: boolean = false;


    constructor(
        // Firestore instance
        private firestore: Firestore,
    ) {
        // Get the skills data from the database
        this.getSkills();
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.editable = this.editable
    }

    inputFocus() {
        this.isfocused = true;
        return this.isfocused;
    }

    public editDoc(skill: any): boolean {
        this.toggle = !this.toggle;
        this.selectedSkillId = skill.id
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
        this.skills = collectionData(collectionInstance, { idField: 'id' });
    }

    // Update a skill in the database
    public updateSKill(id: string, skill: string) {
        const docInstance = doc(this.firestore, 'Skills', id);
        const updateSKill = { skill: skill }
        updateDoc(docInstance, updateSKill).then(() => {
            console.log('Data updated correctly');
        }).catch((err) => {
            console.log(err);
        })
    }

    public deleteDoc(id: string) {
        const docInstance = doc(this.firestore, 'Skills', id);
        deleteDoc(docInstance).then(() => {
            console.log('data deleted')
        }).catch((err) => {
            console.log(err);
        })
    }

}
