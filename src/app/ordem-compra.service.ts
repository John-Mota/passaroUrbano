import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Pedidos } from "./shared/pedidos.model"
import { Observable, map } from "rxjs"
import { API_URL } from "./app.api"

@Injectable()
export class OrdemCompraService {
    
    constructor(private http: HttpClient) {
        
    }
    public evetivarCompra(pedido: Pedidos): Observable<number> {
        
        //let headers = new HttpHeaders({'Content-type': 'application/json'})

        let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-type', 'application/json');


        return this.http.post<any>(
            `${API_URL}/pedidos`,
            (pedido),
            ({headers: headers})
        ).pipe(map((resposta: any) => resposta['id']))
    }
}