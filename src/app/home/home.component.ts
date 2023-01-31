import { Component, OnInit } from '@angular/core' 

import { OfertasService } from '../ofertas.services'
import { Oferta } from '../shared/ofertas.model' 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {
  
  public ofertas!: any
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.getter();
  }

  getter() {
    this.ofertasService.getOfertas()
    .subscribe((data: Oferta) => {
      this.ofertas = data
      console.log('A variavel que preenchemos', this.ofertas)
      console.log('O data que recebemos ', data)
    })
  }

  getterPorCategoria(categoria: string) {
    this.ofertasService.getOfertasPorCategoria(categoria)
    .subscribe((data: Oferta) => {
      this.ofertas = data
    })
  }

}
