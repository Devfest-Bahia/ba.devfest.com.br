import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContadorComponent } from './contador/contador.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { InscricaoComponent } from './inscricao/inscricao.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FooterComponent } from './footer/footer.component';
import { OrganizacaoComponent } from './organizacao/organizacao.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    ContadorComponent,
    PalestrantesComponent,
    InscricaoComponent,
    PatrocinadoresComponent,
    FooterComponent,
    OrganizacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
