//import { FileOpener } from '@ionic-native/file-opener';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FileOpenerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileOpenerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FileOpenerProvider Provider');
  }
  
  /*abrir(archivo:string,tipo:string){
      return this.fileOpener.open(archivo, tipo);
  }*/

}
