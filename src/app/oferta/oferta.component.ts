import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
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
    
    this.ofertaService.gerOfertaPorId(this.route.snapshot.params['id'])
    .subscribe((oferta: Oferta[]) =>  {
      this.oferta = oferta
    })

    
  
  }
    
    

  ngOnDestroy(): void {
    
  }


  
  /*
    const seconds = interval(500);
    this.tempoObservableSubscription  = seconds
      .subscribe(value => console.log(value));

    const hello = Observable.create((observer: Observer<any>) => {
      observer.next('');
      observer.complete();
      observer.error('Error encontrado')
      
    });

  this.meuObsevableTestsSubscrption = hello.subscribe(
      (resultado: any) => console.log(resultado),
      (erro: any) => console.log(erro),
      () => console.log('Stream de event finalizada'))

  ngOnDestroy(): void {
    this.meuObsevableTestsSubscrption?.unsubscribe()
    this.tempoObservableSubscription?.unsubscribe()


    private tempoObservableSubscription!: Subscription
  private meuObsevableTestsSubscrption!: Subscription
  }

   */


}
