import {Injectable} from '@angular/core';
import {Http, RequestOptions, ResponseContentType, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpAngularProvider {
    constructor(public http: Http) {}

    public get(url, params?: any, options: any = {}) {
        let requestOptions = new RequestOptions();
        requestOptions.withCredentials = true;

        requestOptions.params = params ? this.createSearchParams(params) : requestOptions.params;

        return this.http.get(url, requestOptions).map(resp => options.responseType == 'text' ? resp.text() : resp.json());
    }

    public post(url, params: any, options: any = {}) {
        let requestOptions = new RequestOptions();
        requestOptions.withCredentials = true;

        let body = this.createSearchParams(params);

        return this.http.post(url, body, requestOptions).map(resp => options.responseType == 'text' ? resp.text() : resp.json());
    }

    private createSearchParams(params: any) {
        let searchParams = new URLSearchParams();
        for (let k in params) {
            if (params.hasOwnProperty(k)) {
                searchParams.set(k, params[k]);
            }
        }

        return searchParams;
    }
}