import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChildren, inject } from "@angular/core";
import { SkillsModel } from "src/app/models/skillsModel.model";
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc, DocumentData } from '@angular/fire/firestore';
import { BehaviorSubject } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})


export class SkillsComponent implements OnInit, AfterViewInit {
    @ViewChildren('skillsCard') skillsCard!: QueryList<ElementRef>;
    @Input() editable: boolean = false;
    @Input() shortDescription: boolean = false;
    public contentLoaded: boolean = false;
    public isfocused: boolean = false;
    public selectedSkillId: any = 0;
    // Observable to store the skills data
    public skills$: BehaviorSubject<SkillsModel[]> = new BehaviorSubject<SkillsModel[]>([]);
    // Model for the skills data
    public model: SkillsModel = {} as SkillsModel;
    public toggle: boolean = false;
    public shortDesc: string = '';

    constructor(
        // Firestore instance
        // private firestore: Firestore,
        private firestore: Firestore = inject(Firestore),
        private cdRef: ChangeDetectorRef
    ) {
        // Get the skills data from the database
        this.getSkills();
    }
    ngOnInit(): void {
        this.editable = this.editable
    }

    ngAfterViewInit(): void {
        this.skillsCard.changes.subscribe((elements: QueryList<ElementRef>) => {
            if (elements.length > 0) {
                console.log('Element has rendered');
                this.contentLoaded = true;
            } else {
                console.log('Element has not rendered');
                this.contentLoaded = false;
            }
            this.cdRef.detectChanges(); // Manually trigger change detection
        });
        this.skillsCard.notifyOnChanges();
    }

    inputFocus() {
        this.isfocused = true;
        return this.isfocused;
    }

    public editDoc(skill: any): boolean {
        this.toggle = !this.toggle;
        this.selectedSkillId = skill.id;
        return this.toggle;
    }

    // Add a skill to the database
    public addSkill(f: NgForm) {
        const collectionInstance = collection(this.firestore, 'Skills');
        addDoc(collectionInstance, f.value).then(() => {
            console.log('Data saved correctly');
        }).catch((err) => {
            console.log(err)
        })
    }

    // Get the skills data from the database
    public getSkills() {
        const collectionInstance = collection(this.firestore, 'Skills');
        collectionData(collectionInstance, { idField: 'id' })
            .subscribe((skills: DocumentData[]) => {
                const skillsArray = skills.map(skill => skill as SkillsModel);
                this.skills$.next(skillsArray);

                skillsArray.forEach(skill => {
                    if (skill.description) {
                        const sentences = skill.description.split(/(?<=\.)\s/);
                        this.shortDesc = sentences[0];
                    }
                    if (this.shortDescription) {
                        skill.description = this.shortDesc
                    }
                });
            })
    }

    // Update a skill in the database
    public updateSkill(id: string, skill: string,) {
        if(skill === '' || skill === undefined ){
            return
        }
        const docInstance = doc(this.firestore, 'Skills', id);
        const updateSKill = { skill: skill }
        updateDoc(docInstance, updateSKill).then(() => {
            console.log('Skill data updated correctly');
            this.selectedSkillId = false
        }).catch((err) => {
            console.log(err);
        })
    }

    public updateDescription(id: string, description: string | undefined,) {
        const docInstance = doc(this.firestore, 'Skills', id);
        const updateDescription = { description: description }
        updateDoc(docInstance, updateDescription).then(() => {
            console.log('Description data updated correctly');
            this.selectedSkillId = false
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


