import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/ofertas.model';
import { Observable, Subject, debounceTime, switchMap, of,distinctUntilChanged,  catchError } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public oferta!: Observable<Oferta[]>
  //public oferta2!: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.oferta = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(), // se o texto for o mesmo ele não faz a pesquisa novamente.
      switchMap((termo: string) => {
        if(termo.trim() === '') {
          return of<Oferta[]>([])
        }
        return this.ofertaService.pesquisaOfertas(termo) 
        
      }),
      catchError((erro) => {
        console.log('Erro Subject - catchErro: ', erro.status)
        return of<Oferta[]>([])
      })
      )

  }

  public pesquisa(termoDaBusca: string): void {
     this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void{
    this.subjectPesquisa.next('')
  }
    
    
    /*
    
    
    */

 

}
