import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.services';
import { Oferta } from 'src/app/restaurante/ofertas.model';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit{
  oferta!: Oferta[];
  
  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
    ) {}
  
  
  ngOnInit(): void {

    this.route.parent?.params.subscribe((parametros: Params) => {

      this.ofertaService.getComoUsarOfertaPorId(parametros['id'])
      .subscribe((resposta: any) =>  {
      this.oferta = resposta[0].descricao
    })

    })
    
    
  }

}
