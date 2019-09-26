import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InstitutoInterface } from '../models/instituto.interface';

@Injectable({
  providedIn: 'root'
})
export class InstitutoService {

  private institutosCollection: AngularFirestoreCollection<InstitutoInterface>;
  private institutos: Observable<InstitutoInterface[]>;

  constructor(db: AngularFirestore) {
    this.institutosCollection = db.collection<InstitutoInterface>('institutos');
    this.institutos = this.institutosCollection.snapshotChanges().pipe(
      // El map recorre el arreglo recibido y creara uno con la estrucutra deseada
      map( actions => {
        return actions.map( a => {
          // accedemos a los datso especificos que queremos: la info general y el id del doc
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          // lo regresamos como un nuevo objeto json. la variable data, incdica que es un arreglo con n variables
          return { id, ...data };
        });
      }
    ));
  }

  getInstitutos() {
    return this.institutos;
  }

  getInstituto( institutoId: string ){
    return this.institutosCollection.doc<InstitutoInterface>(institutoId).valueChanges();
  }

  updateInstituto( instituto: InstitutoInterface, institutoId: string ) {
    return this.institutosCollection.doc(institutoId).update(instituto);
  }

  addInstituto( instituto: InstitutoInterface ) {
    this.institutosCollection.add(instituto);
  }

  removeInstituto( institutoId: string ) {
    this.institutosCollection.doc(institutoId).delete();
  }

}
