import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/ofertas.model';
import { Observable, Observer, Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})


export class OfertaComponent implements OnInit, OnDestroy {
  
  
 
  public oferta!: Oferta[]
  public tempo!: Observable<any>

  constructor(
    private route: ActivatedRoute, 
    private ofertaService: OfertasService
    
    ) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
      this.ofertaService.gerOfertaPorId(parametros['id'])
      .subscribe((oferta: Oferta[]) =>  {
      this.oferta = oferta
    })
    })
    
    
  }

  ngOnDestroy(): void {
    
  }
}
