import { Conta } from "../model/Conta";

export class ContaController {

    private listaContas: Array<Conta> = [];

    public procurarPorNumero(numero: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.visualizar();
        } else {
            console.log("Conta não encontrada!");
        }
    }

    public listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("Conta cadastrada com sucesso!");
    }

    public atualizar(conta: Conta): void {
        let busca = this.buscarNoArray(conta.numero);

        if (busca != null) {
            this.listaContas[this.listaContas.indexOf(busca)] = conta;
            console.log("Conta atualizada com sucesso!");
        } else {
            console.log("Conta não encontrada!");
        }
    }

    public deletar(numero: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            this.listaContas.splice(this.listaContas.indexOf(conta), 1);
            console.log("Conta deletada com sucesso!");
        } else {
            console.log("Conta não encontrada!");
        }
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
}
