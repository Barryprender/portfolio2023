export class ClientModel {
  id = '';
  nombre = '';
  apellidos = '';
  poblacion = '';
  provincia = '';
  documento = '';
  email = '';
  telefono = '';
  movil = '';
  nacimiento = 'dd-mm-yyyy';
  sedesID = 0;
  created_at = '2022-07-11T10:48:13.734Z';
  updated_at = '2022-07-11T10:48:13.734Z';

  constructor(
      id: string,
      nombre: string,
      apellidos: string,
      poblacion: string,
      provincia: string,
      documento: string,
      email: string,
      telefono: string,
      movil: string,
      nacimiento: string,
      sedesID: number,
      created_at: string,
      updated_at: string
      ) {
    this.id = id;
    this.nombre = nombre
    this.apellidos = apellidos
    this.poblacion = poblacion
    this.provincia = provincia
    this.documento = documento
    this.email = email
    this.telefono = telefono
    this.movil = movil
    this.nacimiento = nacimiento ;
    this.sedesID = sedesID;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
