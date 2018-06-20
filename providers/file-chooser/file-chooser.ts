import {FileChooser} from '@ionic-native/file-chooser';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FileChooserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileChooserProvider {

    constructor(public fileChoo: FileChooser) {
        console.log('Hello FileChooserProvider Provider');
    }

    public abrir() {
        return this.fileChoo.open();
    }
    
}
