import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ConfiguracionesComponent } from './pages/configuraciones/configuraciones.component';
import { AmigosPerfilComponent } from './pages/amigos-perfil/amigos-perfil.component';
import { BuscarAmigosComponent } from './pages/buscar-amigos/buscar-amigos.component';
import { ChatComponent } from './pages/chat/chat.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { FotosPerfilComponent } from './pages/fotos-perfil/fotos-perfil.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { InformacionPerfilComponent } from './pages/informacion-perfil/informacion-perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RecuerdosComponent } from './pages/recuerdos/recuerdos.component';
import { RegistroComponent } from './pages/registro/registro.component';



const routes: Routes = [

  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'grupos',
    component: GruposComponent
  },
  {
  path: 'noticias',
  component: NoticiasComponent
  },
  {
    path: 'configuraciones',
    component: ConfiguracionesComponent
  },
  {
    path: 'amigosPerfil',
    component: AmigosPerfilComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'buscarAmigos',
    component: BuscarAmigosComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'fotosPerfil',
    component: FotosPerfilComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  },
  {
    path: 'informacionPerfil',
    component: InformacionPerfilComponent
  },
  {
    path: '',
    pathMatch: 'full' ,
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'recuerdos',
    component: RecuerdosComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
