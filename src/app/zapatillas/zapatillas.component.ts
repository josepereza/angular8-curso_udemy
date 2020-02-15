import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html' ,
    styleUrls: ['./zapatillas.component.css']
            
        


})
export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public mi_marca:string;
    constructor(){
        this.marcas= new Array();
        this.titulo=" MI gran zapatilla";
    this.zapatillas= [
        new Zapatilla('Reebook clasics','Rebook','blanco',80, true),
        new Zapatilla('adidas speed','Adidas','blanco',180, true),
        new Zapatilla('Nike pro','Nike','blanco',75, false),
        new Zapatilla('adidas clasics','Adidas','blanco',80, true),



    ];
    }
  ngOnInit(){
      console.log(this.zapatillas);
      this.getMarcas();
  }
  getMarcas(){
      this.zapatillas.forEach((zapatilla, index)=>{

        if(this.marcas.indexOf(zapatilla.marca)<0){
            this.marcas.push(zapatilla.marca);

        }
      });
      console.log(this.marcas);
  }
  addMarca(){
      this.marcas.push(this.mi_marca);
  }
  borrarMarca(index){
     this.marcas.splice(index,1)
  }
  mostrarPalabra(){
      alert(this.mi_marca);
  }
}