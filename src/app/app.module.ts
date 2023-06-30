import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ConfiguracionesComponent } from './pages/configuraciones/configuraciones.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
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
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './service/register.service';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GruposComponent,
    NoticiasComponent,
    ConfiguracionesComponent,
    NavComponent,
    FooterComponent,
    AmigosPerfilComponent,
    BuscarAmigosComponent,
    ChatComponent,
    EventosComponent,
    FotosPerfilComponent,
    HistoriaComponent,
    InformacionPerfilComponent,
    LoginComponent,
    PerfilComponent,
    RecuerdosComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
