import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core'; 
import { RouterModule } from '@angular/router'
import {  HttpClient, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common'
import localePtBr from '@angular/common/locales/pt'
registerLocaleData(localePtBr); 

import { ROUTES } from './app.routes'

import { CarrinhoService } from './carrinho.service';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurante/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { DescricaoReduzida } from './util/descrcao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';

//pipe


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CarrinhoService ,HttpClient, {provide: LOCALE_ID, useValue: 'pt-br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
