import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AngularFireAuth} from 'angularfire2/auth';

import {HomePage} from '../pages/home/home';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    //rootPage:any = HomePage;
    rootPage: any

    constructor(platform: Platform, fire: AngularFireAuth, statusBar: StatusBar, splashScreen: SplashScreen) {
        this.rootPage = HomePage;

       /* const authObserver = fire.authState.subscribe(user => {
            if (user) {
                this.rootPage = HomePage;
                authObserver.unsubscribe();
                console.log("Encontrado usuario", user);
            } else {
                console.log("No encontrado usuario", user);
                this.rootPage = LoginPage;
                authObserver.unsubscribe();
            }
        });*/

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

