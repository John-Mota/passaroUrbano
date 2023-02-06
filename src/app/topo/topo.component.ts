import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/ofertas.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public oferta!: Observable<Oferta[]>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaBusca: string): void{
    this.oferta = this.ofertaService.pesquisaOfertas(termoDaBusca)
    console.log(this.oferta)
  }

}
