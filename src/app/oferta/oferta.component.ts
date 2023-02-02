import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})


export class OfertaComponent implements OnInit {
  
  public oferta!: Oferta[]

  constructor(
    private route: ActivatedRoute, 
    private ofertaService: OfertasService
    
    ) { }

  ngOnInit() {
    
    this.ofertaService.gerOfertaPorId(this.route.snapshot.params['id'])
    .subscribe((oferta: Oferta[]) =>  {
      this.oferta = oferta
    })
    
  }
  
  
}
