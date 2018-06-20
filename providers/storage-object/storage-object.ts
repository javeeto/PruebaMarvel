//import { SecureStorageObject } from '@ionic-native/secure-storage';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StorageObjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageObjectProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StorageObjectProvider Provider');
  }
  /*set(storageobj:SecureStorageObject){
      this.secureStorageObj=storageobj;
      return this.secureStorageObj;
  }*/

}
