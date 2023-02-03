import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.services';
import { Oferta } from 'src/app/shared/ofertas.model';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
 
  oferta!: Oferta[];
  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
    ) {}
  
  ngOnInit(): void {
    this.ofertaService.getOndeFicaOfertaPorId(this.route.parent?.snapshot.params['id'])
    .subscribe((resposta: any) =>  {
      this.oferta = resposta[0].descricao
    })
  }

}
