import { ItemCarrinho } from "./item-carrinho.model";

export class Pedidos {

    constructor(
        public endereco: string,
        public numero: String,
        public complemento: string,
        public formaDePagamento: string,
        public itens: Array<ItemCarrinho>
    ) { }
}