import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExperienceModel } from '../models/experienceModel';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  public experienceData = new BehaviorSubject<ExperienceModel>({} as ExperienceModel);
  currentDocumentData = this.experienceData.asObservable();
  private experienceListData = new BehaviorSubject<ExperienceModel[]>(
    new Array<ExperienceModel>(
      {
        id: '1',
        nombre: 'Maria',
        apellidos: 'Marzal',
        poblacion: 'Madrid',
        provincia: 'Madrid',
        documento: 'f8654723L',
        email: 'maria.marzal@compusoft.com',
        telefono: '654321987',
        movil: '987321654',
        nacimiento: new Date("Fri Dec 08 2020 07:44:57"),
        sedesID: 5,
        created_at: '2022-07-11T10:48:13.734Z',
        updated_at: '2022-07-11T10:48:13.734Z'
      },
      {
        id: '2',
        nombre: 'Manuel',
        apellidos: 'Sanchez Sanchez',
        poblacion: 'Madrid',
        provincia: 'Madrid',
        documento: 'f8654723L',
        email: 'manuelS@algomail.com',
        telefono: '654321987',
        movil: '987321654',
        nacimiento: new Date("Fri Dec 08 2020 07:44:57"),
        sedesID: 6,
        created_at: '2022-07-11T10:48:13.734Z',
        updated_at: '2022-07-11T10:48:13.734Z'
      },
      {
        id: '3',
        nombre: 'Juan Pablo',
        apellidos: 'Blanco',
        poblacion: 'Madrid',
        provincia: 'Madrid',
        documento: 'f8654723L',
        email: 'manuelS@algomail.com',
        telefono: '654321987',
        movil: '987321654',
        nacimiento: new Date("Fri Dec 08 2020 07:44:57"),
        sedesID: 7,
        created_at: '2022-07-11T10:48:13.734Z',
        updated_at: '2022-07-11T10:48:13.734Z'

      },
      {
        id: '4',
        nombre: 'Juan Pablo',
        apellidos: 'el Cabron',
        poblacion: 'Madrid',
        provincia: 'Madrid',
        documento: 'f8654723L',
        email: 'Paquito@algomail.com',
        telefono: '654321987',
        movil: '987321654',
        nacimiento:new Date("Fri Dec 08 2020 07:44:57"),
        sedesID: 8,
        created_at: '2022-07-11T10:48:13.734Z',
        updated_at: '2022-07-11T10:48:13.734Z'
      },
      {
        id: '5',
        nombre: 'Titulo Documento',
        apellidos: 'Documento',
        poblacion: 'Madrid',
        provincia: 'Madrid',
        documento: 'f8654723L',
        email: 'Paquito@algomail.com',
        telefono: '654321987',
        movil: '987321654',
        nacimiento: new Date("Fri Dec 08 2020 07:44:57"),
        sedesID: 8,
        created_at: '2022-07-11T10:48:13.734Z',
        updated_at: '2022-07-11T10:48:13.734Z'
      }
    )
  );
  currentListExperienceData = this.experienceListData.asObservable();
  // public experience[]: any[];

  public Getexperience(data: ExperienceModel[]) {
    this.httpClient.get('/api/clients').subscribe(data => {
      // this.clients = data;
      console.log(data)
    });
    this.experienceListData.next(data);
    return this.experienceListData
  }

  constructor(
    public httpClient: HttpClient
  ) { }

}

