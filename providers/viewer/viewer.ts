import { DocumentViewer } from '@ionic-native/document-viewer';
import {Injectable} from '@angular/core';

/*
  Generated class for the ViewerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ViewerProvider {

    constructor(public viewDoc: DocumentViewer) {
        console.log('Hello ViewerProvider Provider');
    }
    
    verDoc(url, mimeTYpe, options){
        //'assets/myFile.pdf', 'application/pdf', options
        return this.viewDoc.viewDocument(url, mimeTYpe, options);
    }


}
