import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Musica } from 'src/app/Entity/Musica';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  musica : Musica = new Musica();

  constructor(private router : Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.buscar();
  }
  //Metodo; Primero hay que buscar la informacion por medio de id
  buscar(){
    let idMusica = localStorage.getItem('id');
    this.musica.idMusica = Number(idMusica);

    //Consumir la Api
    this.service.buscarC(this.musica).subscribe(data =>{
      this.musica = data;
    });
  }

  //Metodo; Despues de buscar bamos a paras a la api de editar
  editar(){
    this.service.editarC(this.musica).subscribe(data =>{
      alert("Se edito el Track" +this.musica.nombreCancion);
      //Redireccionamiento
      this.router.navigate(['listar']);
    });
  }

}
