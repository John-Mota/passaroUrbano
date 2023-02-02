import { Injectable } from '@angular/core' 
import { HttpClient} from '@angular/common/http'

import { Oferta } from './shared/ofertas.model'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    private apiURL = 'http://localhost:3000/ofertas'
    public ofertas!: Oferta
    constructor(private http: HttpClient) {
        
     }
     
    public getOfertas():Observable<any> {
        return this.http.get(`${this.apiURL}?destaque=true`)
        
    }

    public getOfertasPorCategoria(categoria: string):Observable<any>{
        return this.http.get(`${this.apiURL}?categoria=${categoria}`)
        //.subscribe((resposta: any) => resposta.json()))
    }

    public gerOfertaPorId(id: number):Observable<any> {
        return this.http.get(`${this.apiURL}?id=${id}`)
        
        
        
        
        
    }

}
