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
    listaPersonaje:any[] = new Array();
    listaPersonajeMuestra:any[] = new Array();
    pagina:number=1;
    personajeXPagina:number=10;
    titulopagina: string;
    totalpagina:number;
    paginas:any = new Array();

    constructor(
        private fire: AngularFireAuth,
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public storage: SecureStorage,
        public nativoProvide: HttpNativeProvider,
        //public storageobj: SecureStorageObject,
        public httpProvide2: HttpProvideProvider) {
        this.urlserver = httpProvide2.getUrlServe();
        this.titulopagina="Personajes Marvel";

    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad TierraPage');
        this.cargaDatosApi();
    }
   
    cargaDatosApi(){
        this.cargaComics();
        this.cargaPersonajes();
        this.cargaMuestraPersonajes();
    }
    
        /**
     * Carga del api lista de comic disponible
     * 
     */
    busquedaPersonajes(busqueda:string){
        var inicio=this.pagina*this.personajeXPagina-this.personajeXPagina;
        var fin=this.pagina*this.personajeXPagina;
        var i=0;
        var j=0;
        var listaPersonajeTmp:any[]=new Array;
        
        
        this.listaPersonajeMuestra=listaPersonajeTmp;
        for(i=0;i<this.listaPersonaje.length;i++){
            if (this.listaPersonaje[i].titulopersonaje.indexOf(busqueda) !== -1) {
                if (j == inicio && j < fin) {
                    this.listaPersonajeMuestra[j] = this.listaPersonaje[i];
                    j++;
                }
                // }
            }
        }
    }  
    
    /**
     * Carga del api lista de comic disponible
     * 
     */
    cargaMuestraPersonajes(){
        
        this.totalpagina = Math.ceil(this.listaPersonaje.length/this.personajeXPagina)+1;
        var inicio=this.pagina*this.personajeXPagina-this.personajeXPagina;
        var fin=this.pagina*this.personajeXPagina;
        var i=0;
        var j=0;
        var listaPersonajeTmp:any[]=new Array;
        
        this.listaPersonajeMuestra=listaPersonajeTmp;
        for (i = 1; i < this.totalpagina;i++){
            this.paginas[j]=i;
            j++
        }
        j=0;
        for(i=inicio;i<fin;i++){
            if(this.listaPersonaje.length<=i){
                break;
            }            
            this.listaPersonajeMuestra[j] = this.listaPersonaje[i];
            j++;
        }
        console.log('Lista de personaje',this.listaPersonajeMuestra);
    }   
    

    /**
     * Carga del api lista de comic disponible
     * 
     */
    cargaComics(){
        var i=0;
        var ipersonaje=0;
        for(i=0;i<20;i++){
            ipersonaje=Math.round(Math.random()*10)+10;
            this.listaComic[i]={
                urlimagen:"comic/"+(i+1)+".png",
                descripcion:"Ejemplo de descripcion de comic para que aparezca "+i,
                idpersonaje: ipersonaje,
                titulocomic:"Titulo de comic con personaje"+ipersonaje
            }            
        }
    }
    
    irPagina(ipagina:number) {
        this.pagina=ipagina;
        this.cargaMuestraPersonajes();
    }
    
    
   /**
     * Oculta barra de busqueda
     */
    ocultarBuscar() {
        var barraBusca = document.getElementById("barBuscar");
        barraBusca.style.display = "none";
        barraBusca.style.visibility = "hidden";
        var botonBusca = document.getElementById("botonBuscar");
        botonBusca.style.display = "block";
        botonBusca.style.visibility = "visible";
    }
    
    cargaPersonajes(){
        
         var i=0;
         var personajes=[
             "SPIDER-MAN",
             "BLACK WIDOW",
             "CAPTAIN AMERICA",
             "WOLVERINE",
             "DAREDEVIL",
             "LUKE CAGE",
             "THOR",
             "ULTRON",
             "CAPTAIN MARVEL",
             "HULK",
             "IRON MAN",
             "ANT-MAN",
             "VISION",
         ];
        for(i=0;i<personajes.length;i++){
            this.listaPersonaje[i]={
                urlimagen:"personaje/"+(i+1)+".png",
                descripcion:"Ejemplo de descripcion de comic para que aparezca "+i,
                idpersonaje:i+10,
                titulopersonaje:personajes[i]
            }            
        }
    }
    
   /**
     * Muestra barra de busqueda
     * 
     */
    mostrarBuscar() {
        var barraBusca = document.getElementById("barBuscar");
        barraBusca.style.display = "block";
        barraBusca.style.visibility = "visible";
        var botonBusca = document.getElementById("botonBuscar");
        botonBusca.style.display = "none";
        botonBusca.style.visibility = "hidden";
    }
    
   /**
     * Al realizar busqueda ejecuta busqueda de personajes
     */
    onInput(event) {
        console.log(event);
        if (event.target.value.length > 3) {
            //this.mostrarLibros(event.target.value);
            // this.cargarLibros(event.target.value, this.estadoedicion);
            this.busquedaPersonajes(event.target.value);
        } else {
            if (event.target.value == "") {
                //this.mostrarLibros("");
                this.cargaMuestraPersonajes();                
                //  this.cargarLibros("", this.estadoedicion);
            }
        }
    }
}
