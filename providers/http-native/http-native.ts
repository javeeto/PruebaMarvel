import {Injectable} from '@angular/core';
import {HTTP} from '@ionic-native/http';
import {HttpProvideProvider} from '../../providers/http-provide/http-provide';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpNativeProvider {
    urlServe:string="";
    constructor(public http: HTTP,
        public httpProvide2: HttpProvideProvider) {
        this.urlServe = httpProvide2.getUrlServe();
        //this.http.acceptAllCerts(true);
        this.http.enableSSLPinning(true);
    }

    public get(url, params?: any, options: any = {}) {
        let responseData = this.http.get(this.urlServe+url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return Observable.fromPromise(responseData);
    }

    public post(url, params?: any, options: any = {}) {

        console.log("Url carga=",this.urlServe+url);
        console.log("Ruta desde carga=",url);
       // console.log("params",params);
        console.log("options",options);
        console.log("name",name);        
        
        let responseData = this.http.post(this.urlServe+url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return Observable.fromPromise(responseData);
    }
    public postHeader(url, params?: any, options: any = {},header: any = {}) {

        console.log("Url carga=",this.urlServe+url);
        console.log("Ruta desde carga=",url);
       // console.log("params",params);
        console.log("options",options);
        console.log("name",name);        
        
        let responseData = this.http.post(this.urlServe+url, params, header)
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return Observable.fromPromise(responseData);
    }

    public getHeader(url, params?: any, options: any = {},header: any = {}) {
        let responseData = this.http.get(this.urlServe+url, params, header)
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return Observable.fromPromise(responseData);
    }    
        
    public upload(url, params: any, path:string,name:string, options: any={}) {
        console.log("Url carga=",this.urlServe+url);
        console.log("Ruta desde carga=",path);
       // console.log("params",params);
        console.log("options",options);
        console.log("name",name);
       
       
       return this.http.uploadFile(this.urlServe+url, params, {},path,name);
       // .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));
        
        /*.post(url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));*/

        //return Observable.fromPromise(responseData);
    }  
    public uploadHeader(url, params: any, path:string,name:string, options: any={},header: any={}) {
        console.log("Url carga=",this.urlServe+url);
        console.log("Ruta desde carga=",path);
       // console.log("params",params);
        console.log("options",options);
        console.log("name",name);
       
       
       return this.http.uploadFile(this.urlServe+url, params, header,path,name);
       // .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));
        
        /*.post(url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));*/

        //return Observable.fromPromise(responseData);
    }  
      descargaDocu(url:string,filePath:string){
        return this.http.downloadFile(url, {}, {}, filePath);
    }  
      descargaDocuHeader(url:string,filePath:string,header: any={}){
        return this.http.downloadFile(url, {}, header, filePath);
    }     
}
