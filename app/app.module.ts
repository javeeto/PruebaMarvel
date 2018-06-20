import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {HTTP} from '@ionic-native/http';

import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FileUploadOptions, FileTransferObject, FileTransfer} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {FileChooser} from '@ionic-native/file-chooser';
import {FilePath} from '@ionic-native/file-path';
import {DocumentViewer} from '@ionic-native/document-viewer';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { Zip } from '@ionic-native/zip';


import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {HttpProvideProvider} from '../providers/http-provide/http-provide';
import {HttpNativeProvider} from '../providers/http-native/http-native';
import {HttpAngularProvider} from '../providers/http-angular/http-angular';
import {HttpProvider} from '../providers/http/http';
import {FileTransferProvider} from '../providers/file-transfer/file-transfer';
import {FilePathProvider} from '../providers/file-path/file-path';
import {FileProvider} from '../providers/file/file';
import {FileChooserProvider} from '../providers/file-chooser/file-chooser';
import {ViewerProvider} from '../providers/viewer/viewer';
import { ZipProvider } from '../providers/zip/zip';
import { StorageProvider } from '../providers/storage/storage';
import { SecureStorage } from '@ionic-native/secure-storage';
import { StorageObjectProvider } from '../providers/storage-object/storage-object';
//import { FileOpenerProvider } from '../providers/file-opener/file-opener';
//import { FileOpener } from '@ionic-native/file-opener';



const firebaseAuth = {
    apiKey: "AIzaSyCTvX921mdcBomayapDhJ3gbtt1YjCpH_k",
    authDomain: "libreria-libre.firebaseapp.com",
    databaseURL: "https://libreria-libre.firebaseio.com",
    projectId: "libreria-libre",
    storageBucket: "libreria-libre.appspot.com",
    messagingSenderId: "968691831499"
};

@NgModule({
    declarations: [
        MyApp,
        HomePage


    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
         AngularFireModule.initializeApp(firebaseAuth),
         AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        StatusBar,
        SplashScreen,
        
        FileTransfer,
        FileTransferObject,
        Zip,
        DocumentViewer,
        PdfViewerModule,
        FileChooser,
        FilePath,
        File,
        HttpProvideProvider,
        HTTP,
        HttpNativeProvider,
        HttpAngularProvider,
        HttpProvider,
        HttpProvider,
        HttpAngularProvider,
        FileTransferProvider,

        FileProvider,
        FileProvider,
        FileTransferProvider,

        FileChooserProvider,
        
        FilePathProvider,

        ViewerProvider,

    ZipProvider,

    StorageProvider,
    SecureStorage,
    //SecureStorageObject,
    StorageProvider,
    StorageObjectProvider
   // FileOpenerProvider,
   // FileOpener
    ]
})
export class AppModule {}
