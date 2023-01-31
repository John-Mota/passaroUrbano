import { Injectable } from '@angular/core' 
import { HttpClient } from '@angular/common/http'

import { Oferta } from './shared/ofertas.model'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    readonly apiURL!: string;

    constructor(private http: HttpClient) {
        this.apiURL == 'http://localhost:3000'
     }
     
    public getOfertas():Observable<any> {
        return this.http.get('http://localhost:3000/ofertas')
        
    }
    public getOfertasPorCategoria(categoria: string): Observable<any>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        //.subscribe((resposta: any) => resposta.json())
    }
}
