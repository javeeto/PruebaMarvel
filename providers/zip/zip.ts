import { Zip } from '@ionic-native/zip';
import { Injectable } from '@angular/core';

/*
  Generated class for the ZipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ZipProvider {

  constructor(public zip: Zip) {
    console.log('Hello ZipProvider Provider');
  }
  unzip(pathSource:string,pathDest:string){
      return this.zip.unzip(pathSource, pathDest, 
      (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'));

  }

}
