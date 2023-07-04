import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Musica } from 'src/app/Entity/Musica';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {
  constructor(private router : Router, private service : ServiceService){}

  musica : Musica = new Musica();

  //Traer eventos del formulario HTML
  guardar(){
    this.service.guardarC(this.musica).subscribe(data=>{//La data hace la busqueda del id
      alert("Se guardo el nueva Musica: " + this.musica.nombreCancion);
      this.router.navigate(['listar']);
    });//Cierra guardar
  }
}
