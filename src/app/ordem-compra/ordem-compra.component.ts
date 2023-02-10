import { Component } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedidos } from '../shared/pedidos.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent {

  public idPedidoCompra!: number 

  //Pedido
  public pedidos: Pedidos = new Pedidos('', '', '', '')

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaDePagamento: string = ''
  public teste: string = ''

  //controles de válidação
  public  enderecoValido!: boolean
  public numeroValido!: boolean
  public complementoValido!: boolean
  public pagamentoValido!: boolean

  //Estado primitivo
  public enderecoValidoEstadoptimitivo: boolean = true
  public numeroValidoEstadoPrimitivo: boolean = true
  public complementoValidoEstadoPrimitivo: boolean = true
  public pagamentoValidoEstadoPrimitivo: boolean = true

  //Checagem 
  public formEstado: string = 'disable'

  constructor(private ordemCompraService: OrdemCompraService ) {}

  ngOnInit() {
    //this.ordemCompraService.evetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    this.enderecoValidoEstadoptimitivo = false
    
    if(this.endereco.length > 5) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    this.hablitarForm()
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    
    this.numeroValidoEstadoPrimitivo = false

    if(this.numero.length > 1) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.hablitarForm()
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento

    this.complementoValidoEstadoPrimitivo = false

    if(this.complemento.length > -1) {
      this.complementoValido = true
    } else {
      this.complementoValido = false
    }
    this.hablitarForm()
  }

  public atualizaFormaPagamento(formaDePagamento: string): void {
    this.formaDePagamento = formaDePagamento

    this.pagamentoValidoEstadoPrimitivo = false

    if(this.formaDePagamento !== '') {
      this.pagamentoValido = true
    } else {
      this.pagamentoValido = false
    }
    this.hablitarForm()
  }

  public hablitarForm(): void {
    if( this.enderecoValido === true && this.numeroValido === true && this.pagamentoValido === true){
      this.formEstado = ''
    } else {
      this.formEstado = 'disable'
    }
  }

  public confirmarCompra(): void {

  this.pedidos.endereco = this.endereco
  this.pedidos.numero = this.numero
  this.pedidos.complemento = this.complemento
  this.pedidos.formaDePagamento = this.formaDePagamento    

    this.ordemCompraService.evetivarCompra(this.pedidos)
    .subscribe((idPedido: any) => {
     this.idPedidoCompra = idPedido
    })
  }

}
