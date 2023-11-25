import { Component, Input, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc, DocumentData } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { ExperienceModel } from 'src/app/models/experienceModel.model';
import { ExperienceService } from 'src/app/services/experience-service.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    @Input() editable: boolean = false;
    public experiences = new Array<ExperienceModel>();
    public model = ExperienceModel;
    public workExperience$: BehaviorSubject<ExperienceModel[]> = new BehaviorSubject<ExperienceModel[]>([]);
    public shortDesc: string = '';

    constructor(
        // private experienceService: ExperienceService,
        private firestore: Firestore = inject(Firestore),
    ) {
        // this.experienceService.currentListExperienceData.subscribe(data => {
        //     this.experiences = data;
        // })
        this.getWorkExperience();
    }

    // public getWorkExperience() {
    //     const collectionInstance = collection(this.firestore, 'WorkExperience');
    //     collectionData(collectionInstance, { idField: 'id' })
    //         .subscribe((WorkExperience: DocumentData[]) => {
    //             const WorkExperienceArray = WorkExperience.map(experience => experience as ExperienceModel);
    //             this.workExperience$.next(WorkExperienceArray);
    //         })
    // }

    public getWorkExperience() {
        const collectionInstance = collection(this.firestore, 'WorkExperience');
        collectionData(collectionInstance, { idField: 'id' })
            .subscribe((experiences: DocumentData[]) => {
                const experiencesArray = experiences.map(experience => experience as ExperienceModel);
                this.workExperience$.next(experiencesArray);

                experiencesArray.forEach(experience => {
                    if (experience.description) {
                        const sentences = experience.description.split(/(?<=\.)\s/);
                        this.shortDesc = sentences[0];
                    }
                });
            })
    }
}
