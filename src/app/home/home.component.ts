import { Component, OnInit } from '@angular/core' 

import { OfertasService } from '../ofertas.services'
import { Oferta } from '../restaurante/ofertas.model' 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {
  
  public oferta!: Oferta[]
  
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
    .subscribe((ofertas: Oferta[]) => {this.oferta = ofertas})
  }

}