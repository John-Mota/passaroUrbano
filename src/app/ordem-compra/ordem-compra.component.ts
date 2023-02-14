import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedidos } from '../shared/pedidos.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra!: number

  public formulario: FormGroup = new FormGroup ({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    'complemento': new FormControl(null, [Validators.required,Validators.maxLength(120)]),
    'formaPagamento': new FormControl(null, [Validators.required])
  })

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
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
      this.ordemCompraService.evetivarCompra(pedidos)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido
        console.log(this.idPedidoCompra)
      })
    }
  }
}
