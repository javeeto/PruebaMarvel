import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvideProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvideProvider {

    urlServe: string = "";

    constructor(public http: HttpClient) {
        console.log('Hello HttpProvideProvider Provider');
       // this.urlServe = "http://18.188.238.45/Libreria/";
       // this.urlServe = "https://192.168.43.180/libreriala/public/";
       this.urlServe = "assets/";
       // this.urlServe = "http://192.168.0.195/libreriala/public/";
       // this.urlServe = "https://192.168.0.195/libreriala/public/";
       // this.urlServe = "https://18.188.238.45/libreriala/public/";
    }
    getRemoteData(url: string, options: any) {

        console.log("DATOS:");

        return this.http.get(url, options);

        /*.subscribe(data => {
             console.log(data);
         });*/
    }
    postRemoteData(control: string, objectPost: object) {
        //http://192.168.0.101:80/Libreria/CrearLibroCtrl


        return this.http.post(this.urlServe + control, objectPost);
       // return this.http.get('http://192.168.0.101/planetas/controlador/Usuarios.php');


        /* {
        headers: {'Content-Type': 'application/json'}
    });*/
    }
    getUrlServe() {
        return this.urlServe;
    }


    /*uploadFileData(control:string,objectPost:object) {
        return this.http.
    }*/


}
