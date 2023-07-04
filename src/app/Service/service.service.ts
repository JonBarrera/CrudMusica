import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Musica } from '../Entity/Musica';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:7500/api/Musica/'

  listarC(){
    return this.http.get<Musica[]>(this.url+'listar');
  }
  buscarC(musica: Musica){
    return this.http.post<Musica>(this.url+'buscar', musica);
  }
  guardarC(musica: Musica){
    return this.http.post<Musica>(this.url+'guardar', musica);
  }
  editarC(musica: Musica){
    return this.http.post<Musica>(this.url+'editar', musica);
  }  
  eliminarC(musica: Musica){
    return this.http.post<Musica>(this.url+'eliminar', musica);
  }
}
