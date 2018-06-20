import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {HttpProvideProvider} from '../../providers/http-provide/http-provide';
import {AngularFireAuth} from 'angularfire2/auth';
import {SecureStorage, SecureStorageObject} from '@ionic-native/secure-storage';
import {HttpNativeProvider} from '../../providers/http-native/http-native';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    listaComic: any[] = new Array();
    urlserver:string="";

    constructor(
        private fire: AngularFireAuth,
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public storage: SecureStorage,
        public nativoProvide: HttpNativeProvider,
        //public storageobj: SecureStorageObject,
        public httpProvide2: HttpProvideProvider) {
        this.urlserver = httpProvide2.getUrlServe();

    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad TierraPage');

    }
}
