import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user:any;
  public userId: number;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userId =1;
  }

  ngOnInit() {
   this.cargaUsuario();
  }
   cargaUsuario(){
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
             this.user=result;
      },
      error => {
        console.log(<any>error);
      }
    )
   }
}
