import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Musica } from 'src/app/Entity/Musica';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  constructor(private router : Router, private service : ServiceService){}
  musica !: Musica[];

  ngOnInit(): void {
    //Indicar la accion
    this.listar();
  }
  //Consumir los servicios
listar(){
  this.service.listarC().subscribe(data=>{
    this.musica = data;
    console.log("LISTA DE MUSICA"+JSON.stringify(data));
  });
  }//Cierra listar()

  editar(musica : Musica){
    localStorage.setItem("id", musica.idMusica.toString());
    this.router.navigate(["editar"]);//Posisionamiento ruteo "Redireccionamiento"
  }//Cierra editar()

  eliminar(musica : Musica){
    localStorage.setItem("id", musica.idMusica.toString());
    this.router.navigate(["eliminar"]);//Posisionamiento ruteo "Redireccionamiento"
  }//Cierra eliminar()

}
