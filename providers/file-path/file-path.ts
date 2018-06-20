import {FilePath} from '@ionic-native/file-path';
import {Injectable} from '@angular/core';

/*
  Generated class for the FilePathProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilePathProvider {

    constructor(public rutaArch: FilePath) {
        console.log('Hello FilePathProvider Provider');
    }
    public resolver(path) {
        return this.rutaArch.resolveNativePath(path);
    }

}
