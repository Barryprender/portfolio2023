import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillsModel } from '../models/skillsModel';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore'
@Injectable({
    providedIn: 'root'
})

export class SkillsService {

    public skillsData = new BehaviorSubject<SkillsModel>({} as SkillsModel);
    currentDocumentData = this.skillsData.asObservable();
    private skillsTestData = [] as SkillsModel[];
    // private skillsListData = new BehaviorSubject<SkillsModel[]>(
    //     new Array<SkillsModel>(
    //         {
    //             skill: 'HTML'
    //         },
    //         {
    //             skill: 'CSS/SCSS'
    //         },
    //         {
    //             skill: 'JS'
    //         },
    //         {
    //             skill: 'JQuery'
    //         },
    //         {
    //             skill: 'ANGULAR.js'
    //         },
    //         {
    //             skill: 'Angular.io'
    //         },
    //         {
    //             skill: 'GIT'
    //         },
    //         {
    //             skill: 'NODE.js'
    //         },
    //         {
    //             skill: 'Responsive Web'
    //         },
    //         {
    //             skill: 'Cross Browser Compatibility'
    //         },
    //         {
    //             skill: 'REST'
    //         },
    //         {
    //             skill: 'Emails Layouts'
    //         },
    //         {
    //             skill: 'Zeplin'
    //         },
    //     )
    // );
    // currentListSkillsData = this.skillsListData.asObservable();
    testfirebasedata = this.skillsTestData;

    // public GetClientes(data: SkillsModel[]) {
    //     this.httpClient.get('/api/skills').subscribe(data => {
    //         console.log(data)
    //     });

    //     this.skillsListData.next(data);
    //     return this.skillsListData
    // }

    public getSkills() {
        const collectionInstance = collection(this.firestore, 'Skills');
        collectionData(collectionInstance).subscribe(val => {
            console.log(val)
            this.skillsTestData = val as SkillsModel[];

            // this.currentListSkillsData = val
        });


    }

    constructor(
        private firestore: Firestore,
        public httpClient: HttpClient
    ) { }

}

