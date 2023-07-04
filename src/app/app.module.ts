import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Components/listar/listar.component';
import { GuardarComponent } from './Components/guardar/guardar.component';
import { EditarComponent } from './Components/editar/editar.component';
import { EliminarComponent } from './Components/eliminar/eliminar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    GuardarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
