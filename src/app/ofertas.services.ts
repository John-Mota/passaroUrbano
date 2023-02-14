import { Injectable } from '@angular/core' 
import { HttpClient, HttpResponse} from '@angular/common/http'
import { Oferta } from './restaurante/ofertas.model'
import { Observable, catchError, map, retry, throwError } from 'rxjs';

import {  API_URL } from './app.api';



@Injectable({
    providedIn: 'root'
})

export class OfertasService {

   
    public ofertas!: Oferta
    constructor(private http: HttpClient)  {
        
     }
     
    public getOfertas():Observable<any> {
        return this.http.get(`${API_URL}/ofertas?destaque=true`)

        
    }

    public getOfertasPorCategoria(categoria: string):Observable<any>{
        return this.http.get(`${API_URL}/ofertas?categoria=${categoria}`)
        .pipe((resposta: any) => resposta)
    }

    public gerOfertaPorId(id: number):Observable<any> {
        return this.http.get(`${ API_URL}/ofertas?id=${id}`)  
        
    }

    public getComoUsarOfertaPorId(id: number): Observable<any>{
        return this.http.get(`${ API_URL}/como-usar?id=${id}`)  
        
    }

    public getOndeFicaOfertaPorId(id: number): Observable<any>{
        return this.http.get<HttpResponse<Oferta[]>>(`${ API_URL}/onde-fica?id=${id}`)  
    }

    public pesquisaOfertas(termo: string): Observable<any>{
        return this.http.get(`${ API_URL}/ofertas?descricao_oferta_like=${termo}`)
        .pipe( 
            map((resposta: any) =>  resposta),
            retry(10)) 
    }

//, private response: HttpResponse<any>
}
