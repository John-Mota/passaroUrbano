import { Injectable } from '@angular/core' 
import { HttpClient} from '@angular/common/http'

import { Oferta } from './shared/ofertas.model'
import { Observable } from 'rxjs';


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

}
