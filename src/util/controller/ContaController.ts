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

    // 💸 SACAR
    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            if (conta.sacar(valor)) {
                console.log("Saque realizado com sucesso!");
            } else {
                console.log("Saldo insuficiente!");
            }
        } else {
            console.log("Conta não encontrada!");
        }
    }

    // 💰 DEPOSITAR
    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log("Depósito realizado com sucesso!");
        } else {
            console.log("Conta não encontrada!");
        }
    }

    // 🔁 TRANSFERIR
    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor)) {
                contaDestino.depositar(valor);
                console.log("Transferência realizada com sucesso!");
            } else {
                console.log("Saldo insuficiente!");
            }
        } else {
            console.log("Conta não encontrada!");
        }
    }
}