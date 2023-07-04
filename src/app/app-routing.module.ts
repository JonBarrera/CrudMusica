import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Components/listar/listar.component';
import { GuardarComponent } from './Components/guardar/guardar.component';
import { EditarComponent } from './Components/editar/editar.component';
import { EliminarComponent } from './Components/eliminar/eliminar.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'guardar', component: GuardarComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'eliminar', component: EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
