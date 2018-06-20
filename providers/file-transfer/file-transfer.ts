import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';



/*
  Generated class for the FileTransferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileTransferProvider {

    constructor(public transfer: FileTransfer) {
        console.log('Hello FileTransferProvider Provider');
       
    }

}
