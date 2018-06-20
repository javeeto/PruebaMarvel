import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';

import {HttpAngularProvider} from '../http-angular/http-angular';
import {HttpNativeProvider} from '../http-native/http-native';

@Injectable()
export class HttpProvider {
    public http;

    constructor(private platform: Platform, private angularHttp: HttpAngularProvider, private nativeHttp: HttpNativeProvider) {
        this.http = this.platform.is('ios') || this.platform.is('android') ? nativeHttp : angularHttp;
    }
}