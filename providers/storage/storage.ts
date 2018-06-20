import {SecureStorage} from '@ionic-native/secure-storage';
//import {StorageObjectProvider} from '../../providers/storage-object/storage-object'
import {Injectable} from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class StorageProvider {

    constructor(private secureStorage: SecureStorage) {
        //private storageobj: StorageObjectProvider) {
        console.log('Hello StorageProvider Provider');
    }
   /* crear() {
        let responseData = this.secureStorage.create('localdb')
            .then((storage: SecureStorageObject) => storage);
        return Observable.fromPromise(responseData);
    }*/

}
