import { Component} from '@angular/core';
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'             
        


})
export class VideojuegoComponent {
    public titulo:string;
    constructor(){
        this.titulo=" MI gran Angular";
    }

}
