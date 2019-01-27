import { AngularFirestore } from '@angular/fire/firestore';
import { CustomerInfo } from './customer-info.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {

  formData : CustomerInfo;

  constructor( private firestore: AngularFirestore) { }

  getCustomers() {
    return this.firestore.collection('CustomerInfo').snapshotChanges();
  }

}
