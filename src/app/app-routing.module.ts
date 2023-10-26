import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { EquipeComponent } from './equipe/equipe.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { BrowserModule } from '@angular/platform-browser';
import { InscricaoComponent } from './inscricao/inscricao.component';

const routes: Routes = [
  {path: '', redirectTo:'/sobre', pathMatch:'full'},
  {path: 'ingressos', component:InscricaoComponent},
  {path: 'palestrantes', component:PalestrantesComponent},
  {path: 'equipe', component:EquipeComponent},
  {path: 'patrocine', component:PatrocinadoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
