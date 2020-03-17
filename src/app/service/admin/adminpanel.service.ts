import { Injectable, NgZone } from '@angular/core';

import { ProductModel } from '../product-model';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

 
@Injectable({
  providedIn: 'root'
})
export class AdminpanelService {
  productData : any;
  productRef : any;

  constructor(
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone,
  ) { }

  Insert(productData : ProductModel){
    return this.afs.collection('products').add(productData);
  };
  Update(productData : ProductModel){
    this.afs.doc('products/' + productData.productId).update(productData);
  };
  Delete(productData : ProductModel) {
    this.afs.doc('products/' + productData.productId).delete();
  };
  List() {
    return this.afs.collection('products').snapshotChanges();
  };
}
