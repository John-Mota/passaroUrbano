import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedidos } from '../shared/pedidos.model';
import { CarrinhoService } from '../carrinho.service'
import { ItemCarrinho } from '../shared/item-carrinho.model';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra!: number
  public itemCarrinho: ItemCarrinho[] = []

  public formulario: FormGroup = new FormGroup ({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    'complemento': new FormControl(null, [Validators.required,Validators.maxLength(120)]),
    'formaPagamento': new FormControl(null, [Validators.required])
  })

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {
    this.itemCarrinho = this.carrinhoService.exibirItens()
    console.log(this.itemCarrinho)
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('Formulário está inválido')
      this.formulario.get('endereco')?.markAsUntouched()
      this.formulario.get('numero')?.markAsUntouched()
      this.formulario.get('complemento')?.markAsUntouched()
      this.formulario.get('formaPagamento')?.markAsUntouched()
    } else {
      let pedidos: Pedidos = new Pedidos(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
      )
      this.ordemCompraService.efetivarCompra(pedidos)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido
        console.log(this.idPedidoCompra)
      })
    }
  }

  public adiciona(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item)
  }

  public remover(item: ItemCarrinho): void {
    
    if(item.quantidade >= 1) {
      this.carrinhoService.removerQuantidade(item)
    } else {
      this.carrinhoService.exibirItens()
    }
  }
}
