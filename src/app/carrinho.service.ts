import { ItemCarrinho } from "./shared/item-carrinho.model"
import { Oferta } from "./shared/ofertas.model"

export class CarrinhoService {
    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[]{
        return this.itens
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrimho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrimho.id)

        if(itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            this.itens.push(itemCarrimho)
        }
    }

    public somaTotalCarrinho(): number {
        let total: number = 0

        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade) 
        })

        return total
    }


    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
        itemCarrinho.quantidade += 1
    }

    public removerQuantidade(itemCarrinho: ItemCarrinho): void {
        itemCarrinho.quantidade -= 1

        if ( itemCarrinho.quantidade === 0) {
            this.itens.splice(this.itens.indexOf(itemCarrinho), 1)
        }
      
    }

    public limparCarrinho(): void {
        this.itens = []
    }

   

}

