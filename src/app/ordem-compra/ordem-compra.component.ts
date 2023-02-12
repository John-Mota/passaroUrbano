import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedidos } from '../shared/pedidos.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public formulario!: NgForm

  public idPedidoCompra!: number

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra() {
    let pedido: Pedidos = new Pedidos(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaDePagamento
      )

    this.ordemCompraService.evetivarCompra(pedido)
    .subscribe((idPedido: number) => {
      this.idPedidoCompra = idPedido
    })
  }
}
