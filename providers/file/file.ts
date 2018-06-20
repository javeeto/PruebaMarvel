import {File} from '@ionic-native/file';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileProvider {

  constructor(public filep: File) {
    console.log('Hello FileProvider Provider');
  }

}
