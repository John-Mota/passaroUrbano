import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
    transform(texto: string, trunkarEm: number, iniciarEm: number = 0): unknown {
        if(texto.length > trunkarEm) {
            return (texto as string).substr(iniciarEm, trunkarEm) + '...'
        }
        return texto
    }

}