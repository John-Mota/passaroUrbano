import { Injectable } from '@angular/core' 
import { HttpClient} from '@angular/common/http'

import { Oferta } from './shared/ofertas.model'
import { Observable, map, retry } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    private apiURL = 'http://localhost:3000'
    public ofertas!: Oferta
  
    constructor(private http: HttpClient) {
        
     }
     
    public getOfertas():Observable<any> {
        return this.http.get(`${this.apiURL}/ofertas?destaque=true`)
        
    }

    public getOfertasPorCategoria(categoria: string):Observable<any>{
        return this.http.get(`${this.apiURL}/ofertas?categoria=${categoria}`)
        //.subscribe((resposta: any) => resposta.json()))
    }

    public gerOfertaPorId(id: number):Observable<any> {
        return this.http.get(`${this.apiURL}/ofertas?id=${id}`)  
    }

    public getComoUsarOfertaPorId(id: number): Observable<any>{
        return this.http.get(`${this.apiURL}/como-usar?id=${id}`)  
    }

    public getOndeFicaOfertaPorId(id: number): Observable<any>{
        return this.http.get(`${this.apiURL}/onde-fica?id=${id}`)  
    }

    public pesquisaOfertas(termo: string): Observable<any>{
        return this.http.get(`${this.apiURL}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(
            retry(10),
            map((resposta: any) => {
              return resposta;
            })
          );
        
    }

    
    

    
    

       

      /*
      
    this.ofertaService.observable.subscribe()

    public observable(): Observable<any>{
        return new Observable<any>(onse => {
            onse.next(
                setTimeout(() => {
                    
                }, 2000)
            )
        })
    }

    public observableOferta(): Observable<any> {
        return new Observable<string>(observador => {
          observador.next('1')
          observador.next('2')
          observador.next('3')
          observador.next('4')
          observador.complete()
          observador.next('fim')
        }
        })
    
      */

}
