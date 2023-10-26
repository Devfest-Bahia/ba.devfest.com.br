import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { IngressosComponent } from './ingressos/ingressos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { SobreComponent } from './sobre/sobre.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    IngressosComponent,
    PalestrantesComponent,
    SobreComponent,
    PatrocinadoresComponent,
    FooterComponent
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
